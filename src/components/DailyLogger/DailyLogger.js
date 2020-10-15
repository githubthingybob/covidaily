import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//materialUI
import TextField from '@material-ui/core/TextField';
import './DailyLogger.css'

class DailyLogger extends Component {
  state = {
        date: new Date().toLocaleString().split(',')[0],
        helperText: '',
        error: false,
        oximeter: '',
        systolic: '',
        diastolic: '',
        temperature: '',
  }

            handleInputChangeFor = (propertyName) => (event) => {
              this.setState({
                [propertyName]: event.target.value,
              });
            }; //end handleInputChange

  render() {
    return (
      <div id="daily-logger-main-div">
        <h2>Daily Log for {this.state.date}</h2>

        <div id="vitals">
          <h3 className="daily-logger-h3">1. Vitals</h3>
          <TextField 
                    error={this.state.error}
                    helperText={this.state.helperText}
                    name="oximeter"
                    required
                    variant="outlined"
                    value={this.state.oximeter}
                    label="Oximeter (SpO2)"
                    onChange={this.handleInputChangeFor('oximeter')}
          />
           <TextField 
                    error={this.state.error}
                    helperText={this.state.helperText}
                    name="oximeter"
                    required
                    variant="outlined"
                    value={this.state.systolic}
                    label="Blood Pressure: Systolic"
                    onChange={this.handleInputChangeFor('systolic')}
          />
           <TextField 
                    error={this.state.error}
                    helperText={this.state.helperText}
                    name="oximeter"
                    required
                    variant="outlined"
                    value={this.state.diastolic}
                    label="Blood Pressure: Diastolic"
                    onChange={this.handleInputChangeFor('diastolic')}
          />
           <TextField 
                    error={this.state.error}
                    helperText={this.state.helperText}
                    name="oximeter"
                    required
                    variant="outlined"
                    value={this.state.diastolic}
                    label="Temperature"
                    onChange={this.handleInputChangeFor('temperature')}
          />
        </div>

        <div id="symptoms">
          <h3 className="daily-logger-h3">2. Symptoms</h3>
          <fieldset>
            <legend></legend>
           
            <input type="radio" id="personality-change" name="symptoms" value="Personality Change" onClick={this.onClick}></input>
                <label htmlFor= "personality-change"> Personality Change </label>
            <input type="radio" id="congestion" name="symptoms" value="Congestion" onClick={this.onClick}></input>
                <label htmlFor= "Congestion"> Congestion </label>
            <input type="radio" id="dry-cough" name="symptoms" value="Dry Hacking Cough" onClick={this.onClick}></input>
                <label htmlFor= "dry-cough"> Dry, Hacking Cough </label>
            <input type="radio" id="blue-lips-face" name="symptoms" value="Bluish Lips/Face" onClick={this.onClick}></input>
                <label htmlFor= "blue-lips-face"> Bluish Lips and/or Face </label>
            <input type="radio" id="feet-hand-lesions" name="symptoms" value="5" onClick={this.onClick}></input>
                <label htmlFor= "5"> 5 </label>
      
          </fieldset>
        </div>

        <div id="treatment">

        </div>

        <div id="feelings">
          <fieldset>
            <legend>What are your feelings towards the treatment you are currently on today?</legend>
           

              
          </fieldset>
        </div>

        <div id="reactions">

        </div>


      </div>
    );
  }
}

export default connect(mapStoreToProps)(DailyLogger);



//source: https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object