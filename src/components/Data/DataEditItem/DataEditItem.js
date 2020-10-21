import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter} from 'react-router-dom';


class DataLogItem extends Component {

    componentDidMount=()=>{
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.match.params.id
        })
    };//end componentDidMount


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
      </tr>
        )

  } //render
} //component

export default withRouter(connect(mapStoreToProps)(DataLogItem));
