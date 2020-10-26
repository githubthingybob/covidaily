import { connect } from 'react-redux';
import React, {useState, useEffect} from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Line} from 'react-chartjs-2'

//styling
import './DataGraphItems.css'

const Diastolic = (mapStoreToProps) =>{
  let logs = mapStoreToProps.store.logsReducer
  let diastolic = logs.map((item) => item.oximeter);
  let dates = logs.map((item)=> item.date.toLocaleString().replace('2020-', '').split('T')[0]);
  let orderedDates = dates.sort()
console.log('DATES', orderedDates);
const [chartData, setChartData] = useState({});
  const charts =()=>{
    setChartData({
              labels: orderedDates,
              datasets: [
                {
                  label: "Diastolic",
                  data: diastolic,
                  backgroundColor: "rgba(75, 192, 192, 0.6)",
                }
              ]
    })
  } 



    useEffect(() => {
      charts();
    }, [logs])
  return (
    <div id="diastolic-line-graph">
      <Line
      data={chartData}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        title: {
            display: true,
            text: 'Daily Diastolic',
            fontSize: 20
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates (MM-DD)'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'BP: Diastolic'
                }
            }]
        },
        legend:{
              display:false,
            }
      }}
      />
    </div>
  );
}


export default connect(mapStoreToProps)(Diastolic);

