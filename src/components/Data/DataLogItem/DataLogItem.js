import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './DataLogItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter} from 'react-router-dom';

class DataLogItem extends Component {

  state={
    isEditChecked: false
  }
    componentDidMount=()=>{
        this.props.dispatch({
            type: 'FETCH_LOGS',
            payload: this.props.store.user.id
        })
        
    };//end componentDidMount

    goToEdit = () =>{
          this.props.history.push(`/data/edit/${this.props.item.id}`)
          
    }//end checkEdit

    onDelete=(event)=>{
          this.props.dispatch({
            type: "DELETE_LOG",
            payload: this.props.item.id
          })
          window.location.reload();
    } //end ondelete 

  render() {
        return (
            <tr id="data-log-item-tr"> 
            <td>{this.props.item.date.toLocaleString().split('T')[0]}</td>
            <td>{this.props.item.oximeter}</td>
            <td>{this.props.item.temperature}</td>
            <td>{this.props.item.systolic}/{this.props.item.diastolic}</td>
            <td>{this.props.item.treatment}</td>
            <td>{this.props.item.treatment_not_listed}</td>
            <td>{this.props.item.feelings}</td>
            <td>{this.props.item.reactions}</td>
            <td>{this.props.item.reactions_not_listed}</td>
            <td>{this.props.item.symptoms}</td>
            <td>{this.props.item.symptoms_not_listed}</td>
            <td><Checkbox className="data-log-check" onClick={this.goToEdit}/></td>
            <td><Checkbox className="data-log-check" onClick={this.onDelete}/></td>
      </tr>
        )

  } //render
} //component

export default withRouter(connect(mapStoreToProps)(DataLogItem));