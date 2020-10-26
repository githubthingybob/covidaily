import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import {FormControl, FormControlLabel, Switch} from '@material-ui/core';
import DataLog from '../DataLog/DataLog';
import DataGraphs from '../DataGraphs/DataGraphs';


//styling
import './Data.css'

class Data extends Component {
state = {
    checked: true
}

toggle = () =>{
    this.setState({
        checked: !this.state.checked
    })
}

  render() {
      console.log('STATE.CHECKED', this.state.checked)
      if (this.state.checked === true){
            return (

                <div id="data-main-container">
                    <div className="switch">
                         <FormControl component="fieldset">
                        <FormControlLabel 
                        control={<Switch onChange={this.toggle}/>}
                        label="Go to Graphs"
                        />
                    </FormControl>
                    </div>
                    <DataLog/>
                </div>
            );
      }

      else if (this.state.checked===false){
          return(
                <div id="data-main-container">
                    <div className="switch">
                        <FormControl component="fieldset">
                        <FormControlLabel 
                        control={<Switch onChange={this.toggle}/>}
                        label="Go to Logs"
                        />
                    </FormControl>
                    </div>
                    <DataGraphs/>
                </div>

          )
      }

  }
}

export default connect(mapStoreToProps)(Data);

