import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Bar, Line, Pie} from 'react-chartjs-2'

class DataGraphs2 extends Component {
    constructor(mapStoreToProps){
        super(mapStoreToProps);
        this.state = {
            chartData: this.props.chartData
}
    }


  render() {
    return (
      <div>
    <Line
      data={this.state.chartData}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: 'Oximeter'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Dates'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Oximeter'
            }
          }]
        }
      }}
      />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphs2);
