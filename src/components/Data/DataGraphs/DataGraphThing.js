import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DataGraphs2 from './DataGraphs2'

class DataGraphThing extends Component {
   constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }

  componentDidMount=()=>{
    this.getChartData();
  }

  getChartData=()=>{
    
    this.setState({
      chartData:{
        labels: this.props.store.logsReducer.map((item)=> item.date.toLocaleString().replace('2020-', '').split('T')[0]),
        datasets:[
          {
            label:'oximeter',
            data: this.props.store.logsReducer.map((item) => item.oximeter),
            backgroundColor:'red'
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <DataGraphs2 chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphThing);

