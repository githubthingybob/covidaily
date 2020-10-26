import { connect } from 'react-redux';
import React, {useState, useEffect} from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Line} from 'react-chartjs-2'

//styling
import './DataGraphItems.css'

const Temperature = (mapStoreToProps) =>{
  let logs = mapStoreToProps.store.logsReducer
  let temperature = logs.map((item) => item.temperature);
  let dates = logs.map((item)=> item.date.toLocaleString().replace('2020-', '').split('T')[0]);
  let orderedDates = dates.sort()

    console.log('TEMPERATURE', temperature);


  const charts =()=>{
    setChartData({
              labels: orderedDates,
              datasets: [
                {
                  label: "Temperature",
                  data: temperature,
                  backgroundColor: "rgba(75, 192, 192, 0.6)",
                }
              ]
    })
  } 


    const [chartData, setChartData] = useState({});

    useEffect(() => {
      charts();
    }, [logs])

  return (
    <div id="temperature-line-graph">
      <Line
      data={chartData}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        title: {
            display: true,
            text: 'Daily Temperature',
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
                    labelString: 'Temperature (°F)'
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


export default connect(mapStoreToProps)(Temperature);


