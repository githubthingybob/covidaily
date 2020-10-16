import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//materialUI
import TextField from '@material-ui/core/TextField';
import './DailyLogger.css'


class DailyLogger extends Component {
            state = {
                    date: new Date().toLocaleString().split(',')[0],
                    userID: this.props.store.user.id,
                    oximeter: '',
                    systolic: '',
                    diastolic: '',
                    temperature: '',
                    symptoms: [],
                    symptomsNotListed: '',
                    treatment: [],
                    treatmentNotListed: '',
                    feelings: '',
                    reactions: [],
                    reactionsNotListed: '',
                    helperText: '',
                    error: false,
            }

            onSubmit = (event) => {
                    event.preventDefault();
                    console.log('STATE', this.state);
                    
                      if (this.state.oximeter.length>1 && this.state.systolic.length>1 && 
                        this.state.diastolic.length>1 && this.state.temperature.length>1 ) {
                            this.props.dispatch({
                              type: 'POST_LOGS',
                              url: '/api/dailylogger',
                              payload: this.state
                            });
                            this.clearInputFields();
                      } else {
                            this.setState({
                              helperText: 'Required',
                              error: true
                            })
                      }
            }; // end onSubmit

            clearInputFields = () => {
                    this.setState({
                            oximeter: '',
                            systolic: '',
                            diastolic: '',
                            temperature: '',
                            symptoms: [],
                            treatment: [],
                            feelings: '',
                            reactions: [],
                            reactionsNotListed: '',
                            treatmentNotListed: '',
                            symptomsNotListed: ''
                    });
                }//end clear InputFields

            handleInputChangeFor = (propertyName) => (event) => {       
              this.setState({
                  ...this.state,
                    [propertyName]: event.target.value
              });
            }; //end handleInputChange

            onClickSymptoms = (event) =>{
                console.log('state.symptoms:', this.state.symptoms);           
                this.setState({
                    ...this.state,
                    symptoms: [...this.state.symptoms, event.target.value]
                })
            } //end onClickSymptoms

            onClickTreatment = (event) =>{
                console.log('state.treatment', this.state.treatment);
                this.setState({
                    ...this.state,
                    treatment: [...this.state.treatment, event.target.value]
                })
            } //end onClickTreatment

            onClickReactions= (event) =>{
                console.log('state.reactions', this.state.reactions);
                this.setState({
                    ...this.state,
                    reactions: [...this.state.reactions, event.target.value]
                })
            } //end onClickReactions

            onClickFeelings = (event) => {
                this.setState({
                    ...this.state,
                    feelings: event.target.value
                })
            }



  render() {

    return (
      <div id="daily-logger-main-div">
        <h2>Daily Log for {this.state.date}</h2>

        <div id="vitals">
          <h3 className="daily-logger-h3">1. Vitals</h3>
          <div id="oxi-div">
              <TextField 
                    error={this.state.error}
                    helperText={this.state.helperText}
                    name="oximeter"
                    required
                    variant="outlined"
                    value={this.state.oximeter}
                    size="small"
                    label="Oximeter (SpO2)"
                    onChange={this.handleInputChangeFor('oximeter')}
                />
          </div>
          <div id="blood-pressure-div">
              <div id="systolic-div">
                    <TextField 
                        error={this.state.error}
                        helperText={this.state.helperText}
                        name="oximeter"
                        required
                        variant="outlined"
                        value={this.state.systolic}
                        size="small"
                        label="Systolic"
                        onChange={this.handleInputChangeFor('systolic')}
                    />
                </div>

                <span id="divider">/</span>
                
                <div id="diastolic-div">
                    
                    <TextField 
                        error={this.state.error}
                        helperText={this.state.helperText}
                        name="oximeter"
                        required
                        variant="outlined"
                        value={this.state.diastolic}
                        size="small"
                        label="Diastolic"
                        onChange={this.handleInputChangeFor('diastolic')}
                    />
                    
                </div>
            </div>

          <div id="temp-div">
                <TextField 
                    error={this.state.error}
                    helperText={this.state.helperText}
                    name="oximeter"
                    required
                    variant="outlined"
                    value={this.state.temperature}
                    size="small"
                    label="Temperature"
                    onChange={this.handleInputChangeFor('temperature')}
                />
          </div>
        </div>


        <div id="symptoms">
          <h3 className="daily-logger-h3">2. Symptoms</h3>
            <fieldset>
                  <legend>What symptoms do you have today?</legend>
                
                        <input type="checkbox" id="personality-change" name="personality-change" value="Personality Change" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "personality-change">Personality Change </label>
                        <input type="checkbox" id="congestion" name="congestion" value="Congestion" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "Congestion">Congestion </label>
                        <input type="checkbox" id="dry-cough" name="dry-cough" value="Dry Hacking Cough" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "dry-cough">Dry, Hacking Cough </label>
                        <input type="checkbox" id="blue-lips-face" name="blue-lips-face" value="Bluish Lips/Face" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "blue-lips-face">Bluish Lips and/or Face </label>
                        <input type="checkbox" id="feet-hand-lesions" name="feet-hand-lesions" value="Feet/Hand Lesions" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "feet-hand-lesions">Feet and Hand Lesions </label>
                        <input type="checkbox" id="confusion" name="confusion" value="Confusion" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "confusion">Confusion </label>
                        <input type="checkbox" id="difficulty-breathing" name="difficulty-breathing" value="Difficulty Breathing" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "difficulty-breathing">Difficulty Breathing</label>
                        <input type="checkbox" id="dizziness" name="dizziness" value="Dizziness" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "dizziness">Dizziness </label>
                        <input type="checkbox" id="ear-pain" name="ear-pain" value="Ear Pain" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "ear-pain">Ear Pain</label>
                        <input type="checkbox" id="stay-awake" name="stay-awake" value="Inability To Stay Awake" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "stay-awake">Inability to Stay Awake</label>
                        <input type="checkbox" id="vomitting" name="vomitting" value="Vomitting" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "vomitting">Vomitting</label>
                        <input type="checkbox" id="red-eyes" name="red-eyes" value="Red, irritated eyes" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "red-eyes">Red Irritated Eyes</label>
                        <input type="checkbox" id="fatigue" name="fatigue" value="Fatigue" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "fatigue">Fatigue</label>
                        <input type="checkbox" id="chest-pain" name="chest-pain" value="Chest Pain" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "chest-pain">Chest Pain/Tightness</label>
                        <input type="checkbox" id="sharp-pain" name="sharp-pain" value="Sharp, Stabbing Pain" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "sharp-pain">Sharp, Stabbing Pain</label>
                        <input type="checkbox" id="loss-taste-smell" name="loss-taste-smell" value="Loss of Taste/Smell" onClick={this.onClickSymptoms}></input>
                            <label htmlFor= "loss-taste-smell">Loss of Taste/Smell</label>
                        <div>
                                <textarea id="symptoms-not-listed" placeholder="Symptoms/Mental Health Status Not Listed" rows="7" cols="60"
                                onChange={this.handleInputChangeFor('symptomsNotListed')}>
                                </textarea>
                        </div>
          </fieldset>
        </div>


        <div id="treatment">
          <h3 className="daily-logger-h3">3. Treatment</h3>
            <fieldset>
                  <legend>What treatment are you taking today?</legend>
                        <input type="checkbox" id="remdesivir" name="remdesivir" value="Remdesivir" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "remdesivir"> Remdesivir </label>
                        <input type="checkbox" id="dexamethasone" name="dexamethasone" value="Dexamethasone" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "dexamethasone">Dexamethasone</label>
                        <input type="checkbox" id="Convalescent Plasma" name="convalescent-plasma" value="Convalescent Plasma" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "convalescent-plasma">Convalescent Plasma</label>
                        <input type="checkbox" id="kevzara" name="kevzara" value="Kevzara" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "kevzara">Kevzara</label>
                        <input type="checkbox" id="calquence" name="calquence" value="Calquence" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "calquence">Calquence</label>
                        <input type="checkbox" id="colcrys" name="colcrys" value="Colcrys" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "colcrys">Colcrys</label>
                        <input type="checkbox" id="xeljanz" name="xeljanz" value="Xeljanz" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "xeljanz">Xeljanz</label>
                        <input type="checkbox" id="jakafi" name="jakafi" value="Jakafi" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "jakafi">Jakafi</label>
                        <input type="checkbox" id="tocilizumab" name="tocilizumab" value="Tocilizumab" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "tocilizumab">Tocilizumab</label>
                        <input type="checkbox" id="pro-140" name="pro-140" value="Pro-140 Leronlimab " onClick={this.onClickTreatment}></input>
                            <label htmlFor= "pro-140">Pro-140 Leronlimab</label>
                        <input type="checkbox" id="olumiant" name="olumiant" value="Olumiant" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "olumiant">Olumiant</label>
                        <input type="checkbox" id="kineret" name="kineret" value="Kineret" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "kineret">Kineret</label>
                        <input type="checkbox" id="ilaris" name="ilaris" value="Ilaris" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "ilaris">Ilaris</label>
                        <input type="checkbox" id="regeneron" name="regeneron" value="Regeneron" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "regeneron">Regeneron</label>
                        <input type="checkbox" id="otezla" name="otezla" value="Otezla" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "otezla">Otezla</label>
                        <input type="checkbox" id="mavrilimumab" name="mavrilimumab" value="Mavrilimumab" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "mavrilimumab">Mavrilimumab</label>
                        <input type="checkbox" id="ivermectin" name="ivermectin" value="Ivermectin" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "ivermectin">Ivermectin</label>
                        <input type="checkbox" id="azithromycin" name="azithromycin" value="Azithromycin" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "azithromycin">Azithromycin</label>
                        <input type="checkbox" id="kaletra" name="kaletra" value="Kaletra" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "kaletra">Kaletra</label>
                        <input type="checkbox" id="tamiflu" name="tamiflu" value="Tamiflu" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "tamiflu">Tamiflu</label>
                        <input type="checkbox" id="hydroxychloroquine" name="hydroxychloroquine" value="Hydroxychloroquine" onClick={this.onClickTreatment}></input>
                            <label htmlFor= "hydroxychloroquine">Hydroxychloroquine</label>
                        <div>
                                <textarea id="treatments-not-listed" placeholder="Treatment Not Listed" rows="7" cols="60"
                                onChange={this.handleInputChangeFor('treatmentNotListed')}>
                                </textarea>
                        </div>
          </fieldset>
        </div>


        <div id="feelings">
            <h3 className="daily-logger-h3">4. Feelings to Current Treatment</h3>
          <fieldset>
            <legend>What are your feelings and thoughts towards the treatment you are currently on today?</legend>
                <input type="checkbox" id="positive" name="positive" value="Positive" onClick={this.onClickFeelings}></input>
                        <label htmlFor= "positive">Positive</label>
                <input type="checkbox" id="negative" name="negative" value="Negative" onClick={this.onClickFeelings}></input>
                        <label htmlFor= "negative">Negative</label>
          </fieldset>
        </div>


        <div id="reactions">
            <h3 className="daily-logger-h3">5. Reaction(s) to Treatment</h3>
            <fieldset>
                <legend>What are your reactions to your current treatment?</legend>
                        <input type="checkbox" id="nausea" name="nausea" value="Nausea" onClick={this.onClickReactions}></input>
                                <label htmlFor= "nausea">Nausea</label>
                        <input type="checkbox" id="headaches" name="headaches" value="Headaches" onClick={this.onClickReactions}></input>
                                <label htmlFor= "headaches">Headaches</label>
                        <input type="checkbox" id="vomitting" name="vomitting" value="Vomitting" onClick={this.onClickReactions}></input>
                                <label htmlFor= "vomitting">Vomitting</label>
                        <input type="checkbox" id="hives" name="hives" value="Hives" onClick={this.onClickReactions}></input>
                                <label htmlFor= "hives">Hives</label>
                        <input type="checkbox" id="dry-mouth" name="dry-mouth" value="Dry Mouth" onClick={this.onClickReactions}></input>
                                <label htmlFor= "dry-mouth">Dry Mouth</label>
                        <input type="checkbox" id="rash" name="rash" value="Rash" onClick={this.onClickReactions}></input>
                                <label htmlFor= "rash">Negative</label>
                        <input type="checkbox" id="anaphylatic-shock" name="anaphylatic-shock" value="Anaphylatic Shock" onClick={this.onClickReactions}></input>
                                <label htmlFor= "anaphylatic-shock">Anaphylatic Shock</label>
                        <div>
                                <textarea id="reactions-not-listed" placeholder="Reaction(s) Not Listed" rows="7" cols="60"
                                onChange={this.handleInputChangeFor('reactionsNotListed')}>
                                </textarea>
                        </div>
            </fieldset>

        </div>

        <button onClick={this.onSubmit}>SUBMIT</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DailyLogger);



//source: https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object