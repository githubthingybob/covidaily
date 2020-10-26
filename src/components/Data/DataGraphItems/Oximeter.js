import { connect } from 'react-redux';
import React, {useState, useEffect} from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Line} from 'react-chartjs-2'

//styling
import './DataGraphItems.css'

const Oximeter = (mapStoreToProps) =>{
  let logs = mapStoreToProps.store.logsReducer
  let oximeter = logs.map((item) => item.oximeter);
  let dates = logs.map((item)=> item.date.toLocaleString().replace('2020-', '').split('T')[0]);
  let orderedDates = dates.sort()
console.log('DATES', orderedDates);

  const charts =()=>{
    setChartData({
              labels: dates,
              datasets: [
                {
                  label: "Oximeter",
                  data: oximeter,
                  backgroundColor: "rgba(75, 192, 192, 0.6)",
                }
              ]
    })
  } 


    const [chartData, setChartData] = useState({});

    useEffect(() => {
      charts()
    }, [logs])
  return (
    <div id="oximeter-line-graph">
      <Line
      data={chartData}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        title: {
            display: true,
            text: 'Daily Oximeter',
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
                    labelString: 'Oximeter (SpO2)'
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


export default connect(mapStoreToProps)(Oximeter);



// let date = this.props.store.logsReducer.map((item, i)=>
//           item.date.toLocaleString().replace('2020-', '').split('T')[0])

// [this.props.store.logsReducer.map((item) =>
//           item.oximeter)]