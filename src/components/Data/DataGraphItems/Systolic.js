import { connect } from 'react-redux';
import React, {useState, useEffect} from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Line} from 'react-chartjs-2'

//styling
import './DataGraphItems.css'

const Systolic = (mapStoreToProps) =>{
  let logs = mapStoreToProps.store.logsReducer
  let systolic = logs.map((item) => item.systolic);
  let dates = logs.map((item)=> item.date.toLocaleString().replace('2020-', '').split('T')[0]);
  let orderedDates = dates.sort()

    console.log('Systolic', Systolic);

const [chartData, setChartData] = useState({});
  const charts =()=>{
    setChartData({
              labels: orderedDates,
              datasets: [
                {
                  label: "Systolic",
                  data: systolic,
                  backgroundColor: "rgba(75, 192, 192, 0.6)",
                }
              ]
    })
  } 


    

    useEffect(() => {
      charts();
    }, [logs])

  return (
    <div id="systolic-line-graph">
      <Line
      data={chartData}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        title: {
            display: true,
            text: 'Daily Systolic',
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
                    labelString: 'BP: Systolic'
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


export default connect(mapStoreToProps)(Systolic);


