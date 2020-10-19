import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class DataLogItem extends Component {

  render() {
    return (
        <tr> 
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
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
      </tr>
     
    );
  }
}

export default connect(mapStoreToProps)(DataLogItem);

