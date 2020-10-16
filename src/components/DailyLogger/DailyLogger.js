import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//materialUI
import TextField from '@material-ui/core/TextField';
import './DailyLogger.css'


class DailyLogger extends Component {
            state = {
                newDailyLog: {
                    date: new Date().toLocaleString().split(',')[0],
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
                    reactionsNotListed: ''
                },
                helperText: '',
                error: false,   
            }

            onSubmit = (event) => {
                      event.preventDefault();
                      if (this.state.newDailyLog.oximeter.length>1 && this.state.newDailyLog.systolic.length>1 && 
                            this.state.newDailyLog.diastolic.length>1 && this.state.newDailyLog.temperature.length>1 ) {
                        this.props.dispatch({
                              type: 'POST_LOGS',
                              url: '/api/dailylogger',
                              payload: this.state.newDailyLog
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
                        newDailyLog: {
                            oximeter: '',
                            systolic: '',
                            diastolic: '',
                            temperature: '',
                            feelings: '',
                            symptoms: [],
                            treatment: [],
                            reactions: [],
                            symptomsNotListed: '',
                            treatmentNotListed: '',
                            reactionsNotListed: ''
                        }
                    });
                }//end clear InputFields


            handleInputChangeFor = (propertyName, event) => {
                    this.setState({
                        newDailyLog: {
                            ...this.state.newDailyLog,
                            [propertyName]: event.target.value,
                        }
                    });
            }; //end handleInputChange



            onClick = (event) =>{
                    console.log('testing onClick in DailyLogger', this.state.newDailyLog);
                    console.log('ID:', this.props.store.user.id)
                    

                    this.setState({
                        ...this.state.newDailyLog,
                        newDailyLog: {
                            symptoms: [...this.state.newDailyLog.symptoms, event.target.value],
                            treatment: [...this.state.newDailyLog.treatment, event.target.value],
                            feelings: event.target.value,
                            reactions: [...this.state.newDailyLog.reactions, event.target.value]
                        }
                    })
            } //end onClick

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
                    value={this.state.newDailyLog.oximeter}
                    size="small"
                    label="Oximeter (SpO2)"
                    onChange={(event)=>this.handleInputChangeFor('oximeter', event)}
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
                        value={this.state.newDailyLog.systolic}
                        size="small"
                        label="Systolic"
                        onChange={(event)=>this.handleInputChangeFor('systolic', event)}
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
                        value={this.state.newDailyLog.diastolic}
                        size="small"
                        label="Diastolic"
                        onChange={(event)=>this.handleInputChangeFor('diastolic', event)}
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
                    value={this.state.newDailyLog.temperature}
                    size="small"
                    label="Temperature"
                    onChange={(event)=>this.handleInputChangeFor('temperature', event)}
                />
          </div>
        </div>


        <div id="symptoms">
          <h3 className="daily-logger-h3">2. Symptoms</h3>
            <fieldset>
                  <legend>What symptoms do you have today?</legend>
                
                        <input type="checkbox" id="personality-change" name="personality-change" value="Personality Change" onClick={this.onClick}></input>
                            <label htmlFor= "personality-change">Personality Change </label>
                        <input type="checkbox" id="congestion" name="congestion" value="Congestion" onClick={this.onClick}></input>
                            <label htmlFor= "Congestion">Congestion </label>
                        <input type="checkbox" id="dry-cough" name="dry-cough" value="Dry Hacking Cough" onClick={this.onClick}></input>
                            <label htmlFor= "dry-cough">Dry, Hacking Cough </label>
                        <input type="checkbox" id="blue-lips-face" name="blue-lips-face" value="Bluish Lips/Face" onClick={this.onClick}></input>
                            <label htmlFor= "blue-lips-face">Bluish Lips and/or Face </label>
                        <input type="checkbox" id="feet-hand-lesions" name="feet-hand-lesions" value="Feet/Hand Lesions" onClick={this.onClick}></input>
                            <label htmlFor= "feet-hand-lesions">Feet and Hand Lesions </label>
                        <input type="checkbox" id="confusion" name="confusion" value="Confusion" onClick={this.onClick}></input>
                            <label htmlFor= "confusion">Confusion </label>
                        <input type="checkbox" id="difficulty-breathing" name="difficulty-breathing" value="Difficulty Breathing" onClick={this.onClick}></input>
                            <label htmlFor= "difficulty-breathing">Difficulty Breathing</label>
                        <input type="checkbox" id="dizziness" name="dizziness" value="Dizziness" onClick={this.onClick}></input>
                            <label htmlFor= "dizziness">Dizziness </label>
                        <input type="checkbox" id="ear-pain" name="ear-pain" value="Ear Pain" onClick={this.onClick}></input>
                            <label htmlFor= "ear-pain">Ear Pain</label>
                        <input type="checkbox" id="stay-awake" name="stay-awake" value="Inability To Stay Awake" onClick={this.onClick}></input>
                            <label htmlFor= "stay-awake">Inability to Stay Awake</label>
                        <input type="checkbox" id="vomitting" name="vomitting" value="Vomitting" onClick={this.onClick}></input>
                            <label htmlFor= "vomitting">Vomitting</label>
                        <input type="checkbox" id="red-eyes" name="red-eyes" value="Red, irritated eyes" onClick={this.onClick}></input>
                            <label htmlFor= "red-eyes">Red Irritated Eyes</label>
                        <input type="checkbox" id="fatigue" name="fatigue" value="Fatigue" onClick={this.onClick}></input>
                            <label htmlFor= "fatigue">Fatigue</label>
                        <input type="checkbox" id="chest-pain" name="chest-pain" value="Chest Pain" onClick={this.onClick}></input>
                            <label htmlFor= "chest-pain">Chest Pain/Tightness</label>
                        <input type="checkbox" id="sharp-pain" name="sharp-pain" value="Sharp, Stabbing Pain" onClick={this.onClick}></input>
                            <label htmlFor= "sharp-pain">Sharp, Stabbing Pain</label>
                        <input type="checkbox" id="loss-taste-smell" name="loss-taste-smell" value="Loss of Taste/Smell" onClick={this.onClick}></input>
                            <label htmlFor= "loss-taste-smell">Loss of Taste/Smell</label>
                        <div>
                                <textarea id="symptoms-not-listed" placeholder="Symptoms/Mental Health Status Not Listed" rows="7" cols="60"
                                value={this.state.newDailyLog.symptomsNotListed}
                                onChange={(event)=>this.handleInputChangeFor('symptomsNotListed', event)}>
                                </textarea>
                        </div>
          </fieldset>
        </div>


        <div id="treatment">
          <h3 className="daily-logger-h3">3. Treatment</h3>
            <fieldset>
                  <legend>What treatment are you taking today?</legend>
                        <input type="checkbox" id="remdesivir" name="remdesivir" value="Remdesivir" onClick={this.onClick}></input>
                            <label htmlFor= "remdesivir"> Remdesivir </label>
                        <input type="checkbox" id="dexamethasone" name="dexamethasone" value="Dexamethasone" onClick={this.onClick}></input>
                            <label htmlFor= "dexamethasone">Dexamethasone</label>
                        <input type="checkbox" id="Convalescent Plasma" name="convalescent-plasma" value="Convalescent Plasma" onClick={this.onClick}></input>
                            <label htmlFor= "convalescent-plasma">Convalescent Plasma</label>
                        <input type="checkbox" id="kevzara" name="kevzara" value="Kevzara" onClick={this.onClick}></input>
                            <label htmlFor= "kevzara">Kevzara</label>
                        <input type="checkbox" id="calquence" name="calquence" value="Calquence" onClick={this.onClick}></input>
                            <label htmlFor= "calquence">Calquence</label>
                        <input type="checkbox" id="colcrys" name="colcrys" value="Colcrys" onClick={this.onClick}></input>
                            <label htmlFor= "colcrys">Colcrys</label>
                        <input type="checkbox" id="xeljanz" name="xeljanz" value="Xeljanz" onClick={this.onClick}></input>
                            <label htmlFor= "xeljanz">Xeljanz</label>
                        <input type="checkbox" id="jakafi" name="jakafi" value="Jakafi" onClick={this.onClick}></input>
                            <label htmlFor= "jakafi">Jakafi</label>
                        <input type="checkbox" id="tocilizumab" name="tocilizumab" value="Tocilizumab" onClick={this.onClick}></input>
                            <label htmlFor= "tocilizumab">Tocilizumab</label>
                        <input type="checkbox" id="pro-140" name="pro-140" value="Pro-140 Leronlimab " onClick={this.onClick}></input>
                            <label htmlFor= "pro-140">Pro-140 Leronlimab</label>
                        <input type="checkbox" id="olumiant" name="olumiant" value="Olumiant" onClick={this.onClick}></input>
                            <label htmlFor= "olumiant">Olumiant</label>
                        <input type="checkbox" id="kineret" name="kineret" value="Kineret" onClick={this.onClick}></input>
                            <label htmlFor= "kineret">Kineret</label>
                        <input type="checkbox" id="ilaris" name="ilaris" value="Ilaris" onClick={this.onClick}></input>
                            <label htmlFor= "ilaris">Ilaris</label>
                        <input type="checkbox" id="regeneron" name="regeneron" value="Regeneron" onClick={this.onClick}></input>
                            <label htmlFor= "regeneron">Regeneron</label>
                        <input type="checkbox" id="otezla" name="otezla" value="Otezla" onClick={this.onClick}></input>
                            <label htmlFor= "otezla">Otezla</label>
                        <input type="checkbox" id="mavrilimumab" name="mavrilimumab" value="Mavrilimumab" onClick={this.onClick}></input>
                            <label htmlFor= "mavrilimumab">Mavrilimumab</label>
                        <input type="checkbox" id="ivermectin" name="ivermectin" value="Ivermectin" onClick={this.onClick}></input>
                            <label htmlFor= "ivermectin">Ivermectin</label>
                        <input type="checkbox" id="azithromycin" name="azithromycin" value="Azithromycin" onClick={this.onClick}></input>
                            <label htmlFor= "azithromycin">Azithromycin</label>
                        <input type="checkbox" id="kaletra" name="kaletra" value="Kaletra" onClick={this.onClick}></input>
                            <label htmlFor= "kaletra">Kaletra</label>
                        <input type="checkbox" id="tamiflu" name="tamiflu" value="Tamiflu" onClick={this.onClick}></input>
                            <label htmlFor= "tamiflu">Tamiflu</label>
                        <input type="checkbox" id="hydroxychloroquine" name="hydroxychloroquine" value="Hydroxychloroquine" onClick={this.onClick}></input>
                            <label htmlFor= "hydroxychloroquine">Hydroxychloroquine</label>
                        <div>
                                <textarea id="treatments-not-listed" placeholder="Treatment Not Listed" rows="7" cols="60"
                                value={this.state.newDailyLog.treatmentNotListed}
                                onChange={(event)=>this.handleInputChangeFor('treatmentNotListed', event)}>
                                </textarea>
                        </div>
          </fieldset>
        </div>


        <div id="feelings">
            <h3 className="daily-logger-h3">4. Feelings to Current Treatment</h3>
          <fieldset>
            <legend>What are your feelings and thoughts towards the treatment you are currently on today?</legend>
                <input type="checkbox" id="positive" name="positive" value="Positive" onClick={this.onClick}></input>
                        <label htmlFor= "positive">Positive</label>
                <input type="checkbox" id="negative" name="negative" value="Negative" onClick={this.onClick}></input>
                        <label htmlFor= "negative">Negative</label>
          </fieldset>
        </div>


        <div id="reactions">
            <h3 className="daily-logger-h3">5. Reaction(s) to Treatment</h3>
            <fieldset>
                <legend>What are your reactions to your current treatment?</legend>
                        <input type="checkbox" id="nausea" name="nausea" value="Nausea" onClick={this.onClick}></input>
                                <label htmlFor= "nausea">Nausea</label>
                        <input type="checkbox" id="headaches" name="headaches" value="Headaches" onClick={this.onClick}></input>
                                <label htmlFor= "headaches">Headaches</label>
                        <input type="checkbox" id="vomitting" name="vomitting" value="Vomitting" onClick={this.onClick}></input>
                                <label htmlFor= "vomitting">Vomitting</label>
                        <input type="checkbox" id="hives" name="hives" value="Hives" onClick={this.onClick}></input>
                                <label htmlFor= "hives">Hives</label>
                        <input type="checkbox" id="dry-mouth" name="dry-mouth" value="Dry Mouth" onClick={this.onClick}></input>
                                <label htmlFor= "dry-mouth">Dry Mouth</label>
                        <input type="checkbox" id="rash" name="rash" value="Rash" onClick={this.onClick}></input>
                                <label htmlFor= "rash">Negative</label>
                        <input type="checkbox" id="anaphylatic-shock" name="anaphylatic-shock" value="Anaphylatic Shock" onClick={this.onClick}></input>
                                <label htmlFor= "anaphylatic-shock">Anaphylatic Shock</label>
                        <div>
                                <textarea id="reactions-not-listed" placeholder="Reaction(s) Not Listed" rows="7" cols="60"
                                value={this.state.newDailyLog.reactionsNotListed}
                                onChange={(event)=>this.handleInputChangeFor('reactionsNotListed', event)}>
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