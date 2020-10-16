import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Account extends Component {

  render() {
    return (
      <div>
            <div>
                    <p>User ID: {this.props.store.user.id}</p>
                    <p>Email:</p>
            </div>

            <div>
                <p>Days Since COVID-19 Positive</p>
            </div>
        
        <div>
            <fieldset>
                <legend>1. Check the boxes below if they are TRUE</legend>
                <input type="checkbox">Have you ever Tested positive for COVID-19?</input>
                <input type="checkbox">Are you currently suffering COVID-like symptoms?</input>
                <input type="checkbox">Are you a smoker or exposed to 2nd hand smoker?</input>
                <input type="checkbox">Do you take daily vitamin supplements?</input>
                <input type="checkbox">Do you have medical insurance?</input>
                <input type="checkbox">Do you have children who attend school/daycare in person?</input>
                <input type="checkbox">Has your income/career been negatively affected due to COVID-19?</input>
            </fieldset>
        </div>

        <div>
            <fieldset>
                <legend>2. Click on a personality type you match more</legend>
                <input type="radio" name="personality" value="Extrovert">Extrovert</input>
                <input type="radio" name="personality" value="Introvert">Introvert</input>
            </fieldset>
        </div>

        <div>
            <fieldset>
                <legend>3. Click on your current type of residence</legend>
                <input type="radio" name="residence" value="Apartment">Apartment</input>
                <input type="radio" name="residence" value="Townhome/Duplex">Townhome/Duplex</input>
                <input type="radio" name="residence" value="Single Family Home">Single Family Home</input>
                <input type="radio" name="residence" value="Dorm/Other">Dorm/Other</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>4. Click on the current air conditioning system you have</legend>
                <input type="radio" name="ac" value="Central">Central</input>
                <input type="radio" name="ac" value="Ductless">Ductless</input>
                <input type="radio" name="ac" value="Window Unit">Window Unit</input>
                <input type="radio" name="ac" value="Other">Other</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>5. Click on the current type of water you have</legend>
                <input type="radio" name="water" value="Well-water">Well-water</input>
                <input type="radio" name="water" value="City-water">City-water</input>
                <input type="radio" name="water" value="Other">Other</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>6. Click on your race</legend>
                <input type="radio" name="race" value="Non-Hispanic Caucasian">Non-Hispanic Caucasian</input>
                <input type="radio" name="race" value="Hispanic Caucasian">Hispanic Caucasian</input>
                <input type="radio" name="race" value="Black or African American">Black or African American</input>
                <input type="radio" name="race" value="Asian">Asian</input>
                <input type="radio" name="race" value="American Indian or Alaska Native">American Indian or Alaska Native</input>
                <input type="radio" name="race" value="Haiwaiian/Pacific Islander">Haiwaiian/Pacific Islander</input>
                <input type="radio" name="race" value="Other or Multi-Racial">Other or Multi-Racial</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>7. Click on the development you currently reside</legend>
                <input type="radio" name="development" value="Rural">Rural</input>
                <input type="radio" name="development" value="Urban">Urban</input>
                <input type="radio" name="development" value="Suburban">Suburban</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>8. Click on your current age range</legend>
                <input type="radio" name="age" value="Under 20">Under 20</input>
                <input type="radio" name="age" value="20-29">20-29</input>
                <input type="radio" name="age" value="30-39">30-39</input>
                <input type="radio" name="age" value="40-49">40-49</input>
                <input type="radio" name="age" value="50-59">50-59</input>
                <input type="radio" name="age" value="Over 60">Over 60</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>9. Click on your current income range</legend>
                <input type="radio" name="income" value="Below 20k">Below 20</input>
                <input type="radio" name="income" value="20k-45k">20k-45k</input>
                <input type="radio" name="income" value="45k-85k">45k-85k</input>
                <input type="radio" name="income" value="85k-150k">85k-150k</input>
                <input type="radio" name="income" value="Above 150k">Above 150k</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>10. Click on the monthly average amount of social gatherings (with more than 3 
                            people outside your household) you have attended</legend>
                <input type="radio" name="social" value="0-1">0-1</input>
                <input type="radio" name="social" value="2-3">2-3</input>
                <input type="radio" name="social" value="4-6">4-6</input>
                <input type="radio" name="social" value="7-9">7-9</input>
                <input type="radio" name="social" value="10 or more">10 or more</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>11. Click on the monthly average amount of social gatherings (with more than 3 
                            people outside your household) you have attended</legend>
                <input type="radio" name="weight" value="Underweight">Underweight</input>
                <input type="radio" name="weight" value="Average">Average</input>
                <input type="radio" name="weight" value="Overweight">Overweight</input>
                <input type="radio" name="weight" value="Obese">Obese</input>
                <input type="radio" name="weight" value="Morbidly Obese">Morbidly Obese</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>12. Click on the biological sex you were born with</legend>
                <input type="radio" name="sex" value="Male">Male</input>
                <input type="radio" name="sex" value="Female">Female</input>
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend>13. Click on your monthly average hospital/clinic visits</legend>
                <input type="radio" name="hospital" value="0-1">0-1</input>
                <input type="radio" name="hospital" value="2-3">2-3</input>
                <input type="radio" name="hospital" value="4-5">4-5</input>
                <input type="radio" name="hospital" value="6-8">6-8</input>
                <input type="radio" name="hospital" value="9 or more">9 or more</input>
            </fieldset>
        </div>
      </div>
      
    );
  }
}

export default connect(mapStoreToProps)(Account);

