import { connect } from 'react-redux';
import React, {useState, EffectCallback, useEffect} from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Bar, Line, Pie} from 'react-chartjs-2'


const DataGraphs = (mapStoreToProps) =>{
  let logs = mapStoreToProps.store.logsReducer
  let oximeter = logs.map((item) => item.oximeter);
  let dates = logs.map((item)=> item.date.toLocaleString().replace('2020-', '').split('T')[0]);
  const charts =()=>{
    setChartData({
              labels: dates,
              datasets: [
                {
                  label: "Oximeter",
                  data: oximeter,
                  backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                }
              ]
    })
  } 


    const [chartData, setChartData] = useState({});

    useEffect(() => {
      charts()
    }, [logs])
  return (
    <div>
      <Line
      data={chartData}
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


export default connect(mapStoreToProps)(DataGraphs);



// let date = this.props.store.logsReducer.map((item, i)=>
//           item.date.toLocaleString().replace('2020-', '').split('T')[0])

// [this.props.store.logsReducer.map((item) =>
//           item.oximeter)]