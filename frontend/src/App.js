import './App.css';

import { DropzoneArea } from 'material-ui-dropzone';
import { TextField, Card, Button } from '@mui/material';
import LabelList from './components/LabelList';
import axios from 'axios';
import Main from './Main';



function App() {
  // let image = '';
  // let sent = false;

  // const sendData = () => {
  //   console.log(image)
  
  //   const headers = {
  //     'accept': 'application/json'
  //   }
  
  //   let data = new FormData();
  //   data.append('image', image, image.name);
  
  //   const api_endpoint = 'http://127.0.0.1:8000/api/classifier/';
  //   axios.post(api_endpoint, data, {headers:headers})
  //     .then(result=>{
  //       console.log(result.data);
  //       sent = true;
  //     })
  //     .catch(error=>{
  //       console.log(error);
  //     })
  // }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Image classifier</h1>
    //   </header>
    //   <body className="App-body">
    //     <section>
    //       {/* input images */}
    //       <h1>Drop files here:</h1>
    //       <DropzoneArea
    //         onChange={(file) => image = file}
    //         filesLimit={1}
    //       />
    //     </section>
    //     <section>
    //       {/* input labels */}
    //       <LabelList />
    //     </section>
    //     <section>
    //       {/* send request to classify */}
    //       <Button 
    //         variant='contained'
    //         onClick={() => sendData}
    //       >
    //         Classify
    //       </Button>
    //     </section>
    //     <section>
    //       {/* view results */}
    //     </section>
    //   </body>
    // </div>
    <Main/>
  );
}

export default App;
