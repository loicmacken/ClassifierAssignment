import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import AddLabelBox from './AddLabelBox';

class LabelList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   labels: []
    // }
    this.onAddLabel = this.onAddLabel.bind(this);
    this.onRemoveLabel = this.onRemoveLabel.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onAddLabel(label) {
    // this.setState({ labels: [...this.state.labels, label]})
    this.props.onAddLabel(label);
  }

  onRemoveLabel(label) {
    // this.setState(prevState => ({     	
    //   labels: prevState.labels.filter(val => val !== label)     
    // }));
    this.props.onRemoveLabel(label);
  }

  renderItem(item) {
    return (
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => this.onRemoveLabel(item)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={item} />
      </ListItem>
    );
  }
  
  render() {
    return (
      <div>
        <AddLabelBox handleAdd={this.onAddLabel}/>
        <Box sx={{ mt: 1 }}>
          <List>
            <TransitionGroup>
              {this.props.labels.map((item) => (
                <Collapse key={item.toString()}>
                  {this.renderItem(item)}
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </Box>
      </div>
    );
  }
}

export default LabelList;