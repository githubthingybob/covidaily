import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import {FormControl, FormControlLabel, Switch} from '@material-ui/core';
import DataLog from '../DataLog/DataLog';
import DataGraphs from '../DataGraphs/DataGraphs';
import {HashRouter, Link} from 'react-router-dom';

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
                <HashRouter>
                <div id="data-main-container">
                    <FormControl component="fieldset">
                        <FormControlLabel 
                        control={<Switch onChange={this.toggle}/>}
                        label="Go to Graphs"
                        />
                    </FormControl>

                    <DataLog/>
                </div>
                </HashRouter>
            );
      }

      else if (this.state.checked===false){
          return(
              <HashRouter>
                <div id="data-main-container">
                    <FormControl component="fieldset">
                        <FormControlLabel 
                        control={<Switch onChange={this.toggle}/>}
                        label="Go to Logs"
                        />
                    </FormControl>

                    <DataGraphs/>
                    
                </div>
                </HashRouter>
          )
      }

  }
}

export default connect(mapStoreToProps)(Data);

