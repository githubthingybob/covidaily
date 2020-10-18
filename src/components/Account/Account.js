import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//styling
import './Account.css'

class Account extends Component {
    state = {
        covidDays: 0,
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
        covid: ''
    }



        onClick = (propertyName) => (event) =>{
                console.log('state:', this.state);           
                this.setState({
                    ...this.state,
                    [propertyName]:  event.target.value
                })
        } //end onClick

        onSubmit = (event) => {
                    event.preventDefault();
                    console.log('STATE', this.state);
                    this.props.dispatch({
                        type: 'UPDATE_ACCOUNT',
                        url: `/api/user/profile/${this.state.userID}`,
                        payload: this.state
                    });
            }; // end onSubmit

  render() {
    return (
      <div id="account-main-div">
            <div>
                    <p>User ID: {this.props.store.user.id}</p>
                    <p>Email:</p>
            </div>

            <div>
                <p>{this.state.covidDays} Days Since COVID-19 Positive</p>
            </div>
        
        <div className="truefalse-div">
        <fieldset>
                <legend>Have you ever tested positive for COVID-19?</legend>
                <input id="1.1.1"type="radio" name="covid" value="true" onClick={this.onClick('covid')}></input>
                        <label htmlFor= "1.1.1">True</label>
                <input id="1.1.2"type="radio" name="covid" value="false" onClick={this.onClick('covid')}></input>  
                        <label htmlFor= "1.1.2">False</label>
        </fieldset>
        <fieldset>
                <legend>Are you current suffering COVID-like symptoms?</legend>
                <input type="radio" id="1.2.1" name="covidSymptoms" value="true" onClick={this.onClick('covidSymptoms')}></input>
                        <label htmlFor="1.2.1">True</label>
                <input type="radio" id="1.2.2" name="covidSymptoms" value="false" onClick={this.onClick('covidSymptoms')}></input>
                        <label htmlFor="1.2.2">False</label>
        </fieldset>
        <fieldset>
                <legend>Are you a smoker or exposed to 2nd hand smoker?</legend>
                <input id= "1.3.1" type="radio" name="cigarettes" value="true" onClick={this.onClick('cigarettes')}></input>
                        <label htmlFor="1.3.1">True</label>
                <input id= "1.3.2" type="radio" name="cigarettes" value="false" onClick={this.onClick('cigarettes')}></input>
                        <label htmlFor="1.3.2">False</label>
        </fieldset>
        <fieldset>
                <legend>Do you take daily vitamin supplements?</legend>
                <input id="1.4.1" type="radio" name="vitamins" value="true" onClick={this.onClick('vitamins')}></input>
                        <label htmlFor="1.4.1">True</label>
                <input id="1.4.2" type="radio" name="vitamins" value="false" onClick={this.onClick('vitamins')}></input>
                        <label htmlFor="1.4.2">False</label>
        </fieldset>
        <fieldset>
                <legend>Do you have medical insurance?</legend>
                <input id="1.5.1" type="radio" name="insurance" value="true" onClick={this.onClick('insurance')}></input>
                        <label htmlFor="1.5.1">True</label>
                <input id="1.5.2" type="radio" name="insurance" value="false" onClick={this.onClick('insurance')}></input>
                        <label htmlFor="1.5.2">False</label>
        </fieldset>
        <fieldset>
                <legend>Do you have children who attend school/daycare in person?</legend>
                <input id="1.6.1" type="radio" name="children" value="true" onClick={this.onClick('children')}></input>
                        <label htmlFor="1.6.1">True</label>
                <input id="1.6.2" type="radio" name="children" value="false" onClick={this.onClick('children')}></input>
                        <label htmlFor="1.6.2">False</label>
        </fieldset>
        <fieldset>
                <legend>Has your income/career been negatively affected due to COVID-19?</legend>
                <input id="1.7.1" type="radio" name="negative" value="true" onClick={this.onClick('negative')}></input>
                        <label htmlFor="1.7.1">True</label>
                <input id="1.7.2" type="radio" name="negative" value="false" onClick={this.onClick('negative')}></input>
                        <label htmlFor="1.7.2">False</label>
        </fieldset>
        </div>

        <div className="personality-div">
            <fieldset>
                <legend>2. Click on a personality type you match more</legend>
                <input type="radio" id="2.1" name="personality" value="Extrovert" onClick={this.onClick('personality')}></input>
                        <label htmlFor="2.1">Extrovert</label>
                <input type="radio" id="2.2" name="personality" value="Introvert" onClick={this.onClick('personality')}></input>
                        <label htmlFor="2.2">Introvert</label>
            </fieldset>
        </div>

        <div className="residence-div">
            <fieldset>
                <legend>3. Click on your current type of residence</legend>
                <input id="3.1" type="radio" name="residence" value="Apartment" onClick={this.onClick('residence')}></input>
                        <label htmlFor="3.1">Apartment</label>
                <input id="3.2"type="radio" name="residence" value="Townhome/Duplex" onClick={this.onClick('residence')}></input>
                        <label htmlFor="3.2">Townhome/Duplex</label>
                <input id="3.3" type="radio" name="residence" value="Single Family Home" onClick={this.onClick('residence')}></input>
                        <label htmlFor="3.3">Single Family Home</label>
                <input id="3.4" type="radio" name="residence" value="Dorm/Other" onClick={this.onClick('residence')}></input>
                        <label htmlFor="3.4">Dorm/Other</label>
            </fieldset>
        </div>
        <div className="ac-div">
            <fieldset>
                <legend>4. Click on the current air conditioning system you have</legend>
                <input id="4.1" type="radio" name="ac" value="Central" onClick={this.onClick('AC')}></input>
                        <label htmlFor="4.1">Central</label>
                <input id="4.2" type="radio" name="ac" value="Ductless" onClick={this.onClick('AC')}></input>
                        <label htmlFor="4.2">Ductless</label>
                <input id="4.3" type="radio" name="ac" value="Window Unit" onClick={this.onClick('AC')}></input>
                        <label htmlFor="4.3">Window Unit</label>
                <input id="4.4" type="radio" name="ac" value="Other" onClick={this.onClick('AC')}></input>
                        <label htmlFor="4.4">Other</label>
            </fieldset>
        </div>
        <div className="water-div">
            <fieldset>
                <legend>5. Click on the current type of water you have</legend>
                <input id="5.1" type="radio" name="water" value="Well-water" onClick={this.onClick('water')}></input>
                        <label htmlFor="5.1">Well-water</label>
                <input id="5.2" type="radio" name="water" value="City-water" onClick={this.onClick('water')}></input>
                        <label htmlFor="5.2">City-water</label>
                <input id="5.3" type="radio" name="water" value="Other" onClick={this.onClick('water')}></input>
                        <label htmlFor="5.3">Other</label>
            </fieldset>
        </div>
        <div className="race-div">
            <fieldset>
                <legend>6. Click on your race</legend>
                <input id="6.1" type="radio" name="race" value="Non-Hispanic Caucasian" onClick={this.onClick('race')}></input>
                        <label htmlFor="6.1">Non-Hispanic Caucasian</label>
                <input id="6.2"type="radio" name="race" value="Hispanic Caucasian" onClick={this.onClick('race')}></input>
                        <label htmlFor="6.2">Hispanic Caucasian</label>
                <input id="6.3"type="radio" name="race" value="Black or African American" onClick={this.onClick('race')}></input>
                        <label htmlFor="6.3">Black or African American</label>
                <input id="6.4" type="radio" name="race" value="Asian" onClick={this.onClick('race')}></input>
                        <label htmlFor="6.4">Asian</label>
                <input id="6.5" type="radio" name="race" value="American Indian or Alaska Native" onClick={this.onClick('race')}></input>
                        <label htmlFor="6.5">American Indian or Alaska Native</label>
                <input id="6.6" type="radio" name="race" value="Haiwaiian/Pacific Islander" onClick={this.onClick('race')}></input>
                        <label htmlFor="6.6">Haiwaiian/Pacific Islander</label>
                <input id="6.7" type="radio" name="race" value="Other or Multi-Racial" onClick={this.onClick('race')}></input>
                        <label htmlFor="6.7">Other or Multi-Racial</label>
            </fieldset>
        </div>
        <div className="development-div">
            <fieldset>
                <legend>7. Click on the development you currently reside</legend>
                <input id="7.1" type="radio" name="development" value="Rural" onClick={this.onClick('development')}></input>
                        <label htmlFor="7.1">Rural</label>
                <input id="7.2" type="radio" name="development" value="Urban" onClick={this.onClick('development')}></input>
                        <label htmlFor="7.2">Urban</label>
                <input id="7.3" type="radio" name="development" value="Suburban" onClick={this.onClick('development')}></input>
                        <label htmlFor="7.3">Suburban</label>
            </fieldset>
        </div>
        <div className="age-div">
            <fieldset>
                <legend>8. Click on your current age range</legend>
                <input id="8.1" type="radio" name="age" value="20 or under" onClick={this.onClick('age')}></input>
                        <label htmlFor="8.1">20 or under</label>
                <input id="8.2" type="radio" name="age" value="20-29" onClick={this.onClick('age')}></input>
                        <label htmlFor="8.2">20-29</label>
                <input id="8.3" type="radio" name="age" value="30-39" onClick={this.onClick('age')}></input>
                        <label htmlFor="8.3">30-39</label>
                <input id="8.4" type="radio" name="age" value="40-49" onClick={this.onClick('age')}></input>
                        <label htmlFor="8.4">40-49</label>
                <input id="8.5" type="radio" name="age" value="50-59" onClick={this.onClick('age')}></input>
                        <label htmlFor="8.5">50-59</label>
                <input id="8.6" type="radio" name="age" value="60 or over" onClick={this.onClick('age')}></input>
                        <label htmlFor="8.6">60 or over</label>
            </fieldset>
        </div>
        <div className="income-div">
            <fieldset>
                <legend>9. Click on your current income range</legend>
                <input id="9.1" type="radio" name="income" value="Below 20k" onClick={this.onClick('income')}></input>
                        <label htmlFor="9.1">Below 20</label>
                <input id="9.2" type="radio" name="income" value="20k-45k" onClick={this.onClick('income')}></input>
                        <label htmlFor="9.2">20k-45k</label>
                <input id="9.3" type="radio" name="income" value="45k-85k" onClick={this.onClick('income')}></input>
                        <label htmlFor="9.3">45k-85k</label>
                <input id="9.4" type="radio" name="income" value="85k-150k" onClick={this.onClick('income')}></input>
                        <label htmlFor="9.4">85k-150k</label>
                <input id="9.5" type="radio" name="income" value="Above 150k" onClick={this.onClick('income')}></input>
                        <label htmlFor="9.5">Above 150k</label>
            </fieldset>
        </div>
        <div className="social-div">
            <fieldset>
                <legend>10. Click on the monthly average amount of social gatherings (with more than 3 
                            people outside your household) you have attended</legend>
                <input id="10.1" type="radio" name="social" value="0-1" onClick={this.onClick('social')}></input>
                        <label htmlFor="10.1">0-1</label>
                <input id="10.2" type="radio" name="social" value="2-3" onClick={this.onClick('social')}></input>
                        <label htmlFor="10.2">2-3</label>
                <input id="10.3" type="radio" name="social" value="4-6" onClick={this.onClick('social')}></input>
                        <label htmlFor="10.3">4-6</label>
                <input id="10.4" type="radio" name="social" value="7-9" onClick={this.onClick('social')}></input>
                        <label htmlFor="10.4">7-9</label>
                <input id="10.5" type="radio" name="social" value="10 or more" onClick={this.onClick('social')}></input>
                        <label htmlFor="10.5">10 or more</label>
            </fieldset>
        </div>
        <div className="weight">
            <fieldset>
                <legend>11. Click on your weight range</legend>
                <input id="11.1" type="radio" name="weight" value="Underweight" onClick={this.onClick('weight')}></input>
                        <label htmlFor="11.1">Underweight</label>
                <input id="11.2" type="radio" name="weight" value="Average" onClick={this.onClick('weight')}></input>
                        <label htmlFor="11.2">Average</label>
                <input id="11.3" type="radio" name="weight" value="Overweight" onClick={this.onClick('weight')}></input>
                        <label htmlFor="11.3">Overweight</label>
                <input id="11.4" type="radio" name="weight" value="Obese" onClick={this.onClick('weight')}></input>
                        <label htmlFor="11.4">Obese</label>
                <input id="11.5" type="radio" name="weight" value="Morbidly Obese" onClick={this.onClick('weight')}></input>
                        <label htmlFor="11.5">Morbidly Obese</label>
            </fieldset>
        </div>
        <div className="sex-div">
            <fieldset>
                <legend>12. Click on the biological sex you were born with</legend>
                <input id="12.1" type="radio" name="sex" value="Male" onClick={this.onClick('sex')}></input>
                        <label htmlFor="12.1">Male</label>
                <input id="12.2" type="radio" name="sex" value="Female" onClick={this.onClick('sex')}></input>
                        <label htmlFor="12.2">Female</label>
            </fieldset>
        </div>
        <div className="visits">
            <fieldset>
                <legend>13. Click on your monthly average hospital/clinic visits</legend>
                <input id="13.1" type="radio" name="hospital" value="0-1" onClick={this.onClick('visits')}></input>
                        <label htmlFor="13.1">0-1</label>
                <input id="13.2" type="radio" name="hospital" value="2-3" onClick={this.onClick('visits')}></input>
                        <label htmlFor="13.2">2-3</label>
                <input id="13.3" type="radio" name="hospital" value="4-5" onClick={this.onClick('visits')}></input>
                        <label htmlFor="13.3">4-5</label>
                <input id="13.4" type="radio" name="hospital" value="6-8" onClick={this.onClick('visits')}></input>
                        <label htmlFor="13.4">6-8</label>
                <input id="13.5" type="radio" name="hospital" value="9 or more" onClick={this.onClick('visits')}></input>
                        <label htmlFor="13.5">9 or more</label>
            </fieldset>
        </div>

        <button onClick={this.onSubmit}>Update Profile</button>
        <button>Delete Account</button>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(Account);

