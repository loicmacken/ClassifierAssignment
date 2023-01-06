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
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

class AddLabelBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }
  onClick = (e) => {
    if (this.props.handleAdd) {
      this.props.handleAdd(this.state.text);
      this.setState({ text: ''});
    }
  }
  
  render() {
    return (
      <ListItem
        secondaryAction={
          <IconButton 
            edge="end"
            aria-label="add"
            title="Add"
            onClick={this.onClick}
          >
            <AddIcon />
          </IconButton> 
        }
      >
        <TextField 
          id="outlined-basic" 
          value={this.state.text}
          label="Add Label..." 
          variant="outlined" 
          inputProps={{ maxLength: 32 }}
          onChange={(e) => {
            this.setState({ text: e.target.value})
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              this.onClick();
            }
          }}
            
        />
      </ListItem>
    );
  }
}

export default AddLabelBox;