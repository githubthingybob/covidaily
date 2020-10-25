import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Bar, Line, Pie} from 'react-chartjs-2'


class DataGraphs extends Component {
  state = {
    chartData: {
      labels: this.props.store.logsReducer.map((item, i)=>
              item.date.toLocaleString().replace('2020-', '').split('T')[0]),
      dataSets: [
        {
          label: '',
          data: [],
          backgroundColor: ['','']
        }
      ]
    }

  }

  render() {
    console.log('DATE', this.state.chartData.labels);
    let date = this.props.store.logsReducer.map((item, i)=>
              item.date.toLocaleString().replace('2020-', '').split('T')[0])
    console.log('DATE THING', date);
    
    return (
      <div id="personal-daily-values">
        <p>TESTING</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphs);
