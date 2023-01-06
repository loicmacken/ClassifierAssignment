import * as React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { TextField, Card, Button, Alert } from '@mui/material';
import LabelList from './components/LabelList';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      labels: [],
      sent: false,
    }
    this.sendData = this.sendData.bind(this);
  }

  handleAddLabel(label) {
    this.setState({ labels: [...this.state.labels, label]});
  }
  handleRemoveLabel(label) {
    this.setState(prevState => ({     	
      labels: prevState.labels.filter(val => val !== label)     
    }));
  }

  sendData = () => {
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  
    let data = new FormData();
    const dict = Object.assign({}, ...this.state.labels.map((label) => ({[label]: ''})));
    data.append('labels', JSON.stringify(dict)); 
    data.append('image', this.state.image);

    const api_endpoint = 'http://127.0.0.1:8000/api/classifier/';

    axios.post(api_endpoint, data, {headers:headers})
      .then(result=>{
        console.log("response:")
        console.log(result.data);
        this.setState({ sent: true });
      })
      .catch(error=>{
        console.log(error.request);
      })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Image classifier</h1>
      </header>
      {this.state.sent && <Alert variant="info">Successfully sent to classification</Alert>}
      <body className="App-body">
        <section>
          {/* input images */}
          <h1>Drop files here:</h1>
          <DropzoneArea
            onChange={(file) => this.setState({ image: file[0]})}
            filesLimit={1}
          />
        </section>
        <section>
          {/* input labels */}
          <LabelList 
            labels={this.state.labels}
            onAddLabel={(label) => this.handleAddLabel(label)}
            onRemoveLabel={(label) => this.handleRemoveLabel(label)}
          />
        </section>
        <section>
          {/* send request to classify */}
          <Button 
            variant='contained'
            disabled={!this.state.image || !this.state.labels.length}
            onClick={() => this.sendData()}
          >
            Classify
          </Button>
        </section>
        <section>
          {/* view results */}
        </section>
      </body>
    </div>
    );
  }
}

export default Main;