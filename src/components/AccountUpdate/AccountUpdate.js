import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter} from 'react-router-dom';



//styling
import './AccountUpdate.css'
import {Radio, RadioGroup, FormLabel, FormControl, Button, Select,
    FormControlLabel, Grid} from '@material-ui/core';
class Account extends Component {
    state = {
        date: new Date().toLocaleString().split(',')[0],
        userID: this.props.store.user.id,
        personality: '',
        residence: '',
        AC: '',
        water: '',
        race: '',
        sex: '',
        development: '',
        age: '',
        income: '',
        social: '',
        weight: '',
        covidSymptoms: '',
        cigarettes: '',
        vitamins: '',
        insurance: '',
        children: '',
        negative: '',
        covid: '',
        visits: ''
    }
        onClick = (propertyName) => (event) =>{
                console.log('state:', this.state);           
                this.setState({
                    ...this.state,
                    [propertyName]:  event.target.value
                })
        } //end onClick

        onChange= (propertyName, event) =>{
                console.log('state:', this.state);           
                this.setState({
                    ...this.state,
                    [propertyName]:  event.target.value
                })
        } //end onChange
        onSubmit = (event) => {
                    event.preventDefault();
                    console.log('STATE', this.state);
                    this.props.dispatch({
                        type: 'UPDATE_ACCOUNT',
                        url: `/api/user/profile/${this.state.userID}`,
                        payload: this.state
                    });
                    this.props.history.push('/account')
            }; // end onSubmit

  render() {
    return (
     <div id="account-main-container">
        <Grid id="account-main-grid"> 
                <Grid container spacing={5}>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Have you ever tested positive for COVID-19?</FormLabel>
                                        <RadioGroup > 
                                                <FormControlLabel name="covid" value="true" control={<Radio size="small" id="1.1.1" onClick={this.onClick('covid')}/>} label="True"/>
                                                <FormControlLabel name="covid" value="false" control={<Radio size="small" id="1.1.2" onClick={this.onClick('covid')}/>  } label="False"/>
                                        </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Are you current suffering COVID-like symptoms?</FormLabel>
                                        <RadioGroup>
                                                <FormControlLabel name="covidSymptoms" value="true" control={<Radio size="small"  id="1.2.1" onClick={this.onClick('covidSymptoms')}/>} label="True"/>
                                                <FormControlLabel name="covidSymptoms" value="false" control={<Radio size="small" id="1.2.2" onClick={this.onClick('covidSymptoms')}/>} label="False"/>
                                        </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        <FormControl component="fieldset">
                                <FormLabel component="legend">Are you a smoker or exposed to 2nd hand smoker?</FormLabel>
                                <RadioGroup>
                                        <FormControlLabel name="cigarettes" value="true"control={<Radio size="small" id= "1.3.1" onClick={this.onClick('cigarettes')}/>} label="True"/>
                                        <FormControlLabel control={<Radio size="small" id= "1.3.2"  name="cigarettes" value="false" onClick={this.onClick('cigarettes')}/>} label="False"/>
                                </RadioGroup>
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        <FormControl component="fieldset">
                                <FormLabel component="legend">Do you take daily vitamin supplements?</FormLabel>
                                <RadioGroup>
                                        <FormControlLabel name="vitamins" value="true"control={<Radio size="small" id="1.4.1" onClick={this.onClick('vitamins')}/>} label="True"/>
                                        <FormControlLabel name="vitamins" value="false"control={<Radio size="small" id="1.4.2" onClick={this.onClick('vitamins')}/>} label="False"/>
                                </RadioGroup>
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        <FormControl component="fieldset">
                                <FormLabel component="legend">Do you have medical insurance?</FormLabel>
                                <RadioGroup>
                                        <FormControlLabel name="insurance" value="true" control={<Radio size="small" id="1.5.1" onClick={this.onClick('insurance')}/>} label="True"/>
                                        <FormControlLabel name="insurance" value="false"control={<Radio size="small" id="1.5.2" onClick={this.onClick('insurance')}/>} label="False"/>
                                </RadioGroup>
                        </FormControl>
                        </Grid>
                </Grid>

                <Grid container spacing={5} id="row-2">
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Do you have children who attend school/daycare in person?</FormLabel>
                                        <RadioGroup>
                                                <FormControlLabel name="children" value="true" control={<Radio size="small" id="1.6.1" onClick={this.onClick('children')}/>} label="True"/>
                                                <FormControlLabel name="children" value="false" control={<Radio size="small" id="1.6.2" onClick={this.onClick('children')}/>} label="False"/>
                                        </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Has your income/career been negatively affected due to COVID-19?</FormLabel>
                                        <RadioGroup>
                                                <FormControlLabel name="negative" value="true"control={<Radio size="small" id="1.7.1" onClick={this.onClick('negative')}/>} label="True"/>
                                                <FormControlLabel name="negative" value="false" control={<Radio size="small" id="1.7.2" onClick={this.onClick('negative')}/>} label="False"/>
                                        </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on a personality type you match more</FormLabel>
                                        <RadioGroup>
                                                <FormControlLabel name="personality" value="Extrovert" control={<Radio size="small"  id="2.1" onClick={this.onClick('personality')}/>} label="Extrovert"/>
                                                <FormControlLabel name="personality" value="Introvert" control={<Radio size="small"  id="2.2" onClick={this.onClick('personality')}/>} label="Introvert"/>
                                        </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on the biological sex you were born with</FormLabel>
                                        <RadioGroup>
                                                <FormControlLabel name="sex" value="Male"control={<Radio size="small" id="12.1" onClick={this.onClick('sex')}/>} label="Male"/>
                                                <FormControlLabel name="sex" value="Female" control={<Radio size="small" id="12.2" onClick={this.onClick('sex')}/>} label="Female"/>
                                        </RadioGroup>
                                </FormControl>
                        </Grid>
                </Grid>

                <Grid container spacing={5} id="row-3">
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on the current type of water you have</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('water', event)}
                                        >
                                                <option name="water" value="Well-water" id="5.1">Well-water</option>
                                                <option name="water" value="City-water" id="5.2">City-water</option>
                                                <option name="water" value="Other" id="5.3">Other</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on your race</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('race', event)}
                                        >
                                                <option name="race" value="Non-Hispanic Caucasian" id="6.1">Non-Hispanic Caucasian</option>
                                                <option name="race" value="Hispanic Caucasian" id="6.2">Hispanic Caucasian</option>
                                                <option name="race" value="Black or African American" id="6.3">Black or African American</option>
                                                <option name="race" value="Asian" id="6.4">Asian</option>
                                                <option name="race" value="American Indian or Alaska Native" id="6.5">American Indian or Alaska Native</option>
                                                <option name="race" value="Haiwaiian/Pacific Islander" id="6.6">Haiwaiian/Pacific Islander</option>
                                                <option name="race" value="Other or Multi-Racial" id="6.7">Other or Multi-Racial</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on the development you currently reside</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('development', event)}
                                        >
                                                <option name="development" value="Rural" id="7.1">Rural</option>
                                                <option name="development" value="Urban" id="7.2">Urban</option>
                                                <option name="development" value="Suburban" id="7.3">Suburban</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on your current age range</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('age', event)}
                                        >
                                                <option name="age" value="20 or under"id="8.1">0 or under</option>
                                                <option name="age" value="20-29"id="8.2">0-29</option>
                                                <option name="age" value="30-39" id="8.3">0-39</option>
                                                <option name="age" value="40-49" size="small" id="8.4">0-49</option>
                                                <option name="age" value="50-59" size="small" id="8.5">0-59</option>
                                                <option name="age" value="60 or over" id="8.6">60 or over</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on your current income range</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('income', event)}
                                        >
                                                <option name="income" value="Below 20k" id="9.1">Below 20</option>
                                                <option name="income" value="20k-45k" id="9.2">20k-45k</option>
                                                <option name="income" value="45k-85k" id="9.3">45k-85k</option>
                                                <option name="income" value="85k-150k" id="9.4">85k-150k</option>
                                                <option name="income" value="Above 150k" id="9.5">Above 150k</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                </Grid>
                <Grid container spacing={5}>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on the monthly average amount of social gatherings (with 3+ people outside your household) you have attended</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('social', event)}
                                        >
                                                <option name="social" value="0-1" id="10.1">0-1</option>
                                                <option name="social" value="2-3" id="10.2">2-3</option>
                                                <option name="social" value="4-6" id="10.3">4-6</option>
                                                <option name="social" value="7-9" id="10.4">7-9</option>
                                                <option name="social" value="10 or more" id="10.5">10 or more</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on your weight range</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('weight', event)}
                                        >
                                                <option id="11.1"  name="weight" value="Underweight">Underweight</option>
                                                <option id="11.2"  name="weight" value="Average">Average</option>
                                                <option id="11.3"  name="weight" value="Overweight">Overweight</option>
                                                <option id="11.4"  name="weight" value="Obese">Obese</option>
                                                <option id="11.5"  name="weight" value="Morbidly Obese">Morbidly Obese </option>
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on your current type of residence</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('residence', event)}
                                        >
                                                <option value="Apartment" name="residence" id="3.1">Apartment</option>
                                                <option name="residence" value="Townhome/Duplex" id="3.2">Townhome/Duplex</option>
                                                <option name="residence" value="Single Family Home" id="3.3">Single Family Home</option>               
                                                <option name="residence" value="Dorm/Other" id="3.4">Dorm/Other</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                                <FormControl component="fieldset">
                                        <FormLabel component="legend">Click on your monthly average hospital/clinic visits</FormLabel>
                                        <Select
                                        onChange={(event)=>this.onChange('visits', event)}
                                        >
                                                <option name="hospital" value="0-1" id="13.1">0-1</option>
                                                <option name="hospital" value="2-3" id="13.2">2-3</option>
                                                <option name="hospital" value="4-5" id="13.3">4-5</option>
                                                <option name="hospital" value="6-8" id="13.4">6-8</option>
                                                <option name="hospital" value="9 or more" id="13.5">9 or more</option>
                                        </Select>
                                </FormControl>
                        </Grid>
                </Grid>
                <div id="account-update-btn-div">
                        <Button
                                id="account-update-btn" 
                                onClick={this.onSubmit}>
                        Update Profile
                        </Button>
                </div>
                

        </Grid>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(Account));

