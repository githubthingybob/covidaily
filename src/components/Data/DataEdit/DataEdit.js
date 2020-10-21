import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {TextField, Button} from '@material-ui/core';

class DataEdit extends Component {
  state = {
                userID: this.props.store.user.id,
                oximeter: '',
                systolic: '',
                diastolic: '',
                temperature: '',
                symptoms: [],
                symptomsNotListed: '',
                treatment: [],
                treatmentNotListed: '',
                feelings: '',
                reactions: [],
                reactionsNotListed: '',
  }//end state
  
  componentDidMount=()=>{
     console.log('this.props.match.params.id', this.props.match.params.id);
      this.props.dispatch({
      type: 'FETCH_DETAILS',
      payload: this.props.match.params.id
    })
  }

  onSubmitEdit = (event)=>{
    event.preventDefault();
    let newDetails = {
      ...this.state,
      logID: this.props.match.params.id
    }

  }
  render() {
   
    return (
      <div >
  
        <Button>SUBMIT EDIT</Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataEdit);

