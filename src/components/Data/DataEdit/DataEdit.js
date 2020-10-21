import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DataEditItem from '../DataEditItem/DataEditItem';

//styling and materialUI
import {RadioGroup, Radio, FormLabel, FormControl, Button, 
    FormControlLabel, FormGroup, Checkbox, TextField} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid'



class DataEdit extends Component {
      state = {
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
      }//end state
      
      componentDidMount=()=>{
        console.log('this.props.match.params.id', this.props.match.params.id);
          this.props.dispatch({
          type: 'FETCH_DETAILS',
          payload: this.props.match.params.id
        })
      }

      onSubmitEdit = (event)=>{
        event.preventDefault();
        let newDetails = {
          ...this.state,
          logID: this.props.match.params.id
        }
        if (this.state.oximeter === ''){
          newDetails.oximeter= this.props.store.detailsReducer.oximeter
        }
        if (this.state.systolic === ''){
          newDetails.oximeter= this.props.store.detailsReducer.systolic
        }
        if (this.state.diastolic === ''){
          newDetails.oximeter= this.props.store.detailsReducer.diastolic
        }
        if (this.state.temperature === ''){
          newDetails.oximeter= this.props.store.detailsReducer.temperature
        }
        if (this.state.symptoms === []){
          newDetails.oximeter= this.props.store.detailsReducer.symptoms
        }
        if (this.state.symptomsNotListed === ''){
          newDetails.oximeter= this.props.store.detailsReducer.symptomsNotListed
        }
        if (this.state.treatment === ''){
          newDetails.oximeter= this.props.store.detailsReducer.treatment
        }
        if (this.state.treatmentNotListed === ''){
          newDetails.oximeter= this.props.store.detailsReducer.treatmentNotListed
        }
        if (this.state.feelings === ''){
          newDetails.oximeter= this.props.store.detailsReducer.feelings
        }
        if (this.state.reactions === []){
          newDetails.oximeter= this.props.store.detailsReducer.reactions
        }
        if (this.state.reactionsNotListed === ''){
          newDetails.oximeter= this.props.store.detailsReducer.reactionsNotListed
        }
            this.props.dispatch({
              type: 'EDIT_LOG',
              payload: newDetails
            })
      }

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
          console.log('feelings:', this.state.feelings)
                this.setState({
                    ...this.state,
                    feelings: event.target.value
          })
      }

      
  render() {
    return (
      <div>
              <div id="data-log-main-div">
        <table id="data-log-main-table">
          <thead >
            <tr id="data-log-thead">
              <th>Date</th>
              <th>Oximeter</th>
              <th>Temperature</th>
              <th>Blood Pressure</th>
              <th>Treatment</th>
              <th>Other Treatment:</th>
              <th>Feelings</th>
              <th>Reactions</th>
              <th>Other Reactions:</th>
              <th>Symptoms</th>
              <th>Other Symptoms:</th>
            </tr>
          </thead>
          <tbody>
              {this.props.store.detailsReducer.map((item, i)=>
              <DataEditItem 
              key={i}
              item={item}
              />)}
          </tbody>
        </table>
      </div>
        <Button onClick={this.onSubmitEdit}>Submit Edit</Button>
        <Grid container spacing={5}>    
              <Grid item xs id="vitals">
                  <h3 className="daily-logger-h3">1. Vitals</h3>
                      <div id="oxi-div">
                                <TextField 
                                      
                                      helperText={this.state.helperText}
                                      name="oximeter"
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
                                      
                                      helperText={this.state.helperText}
                                      name="oximeter"
                                      variant="outlined"
                                      value={this.state.systolic}
                                      size="small"
                                      label="Systolic"
                                      onChange={this.handleInputChangeFor('systolic')}
                                  />
                            </div>
                            <div id="diastolic-div"> 
                                  <TextField 
                                      
                                      helperText={this.state.helperText}
                                      name="oximeter"
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
                                      
                                      helperText={this.state.helperText}
                                      name="oximeter"
                                      variant="outlined"
                                      value={this.state.temperature}
                                      size="small"
                                      label="Temperature"
                                      onChange={this.handleInputChangeFor('temperature')}
                                  />
                        </div>
              </Grid>
              
              <Grid item xs id="symptoms">
                <h3 className="daily-logger-h3">2. Symptoms</h3>
                      <FormControl component="fieldset" >
                      <FormLabel component="legend">What symptoms do you have today?</FormLabel>
                          <FormGroup>
                                      <FormControlLabel control={
                                              <Checkbox classname="symptoms-label" id="personality-change" name="personality-change" value="Personality Change" onClick={this.onClickSymptoms}/>} 
                                              label="Personality Change" />
                                      <FormControlLabel control={
                                              <Checkbox id="congestion" name="congestion" value="Congestion" onClick={this.onClickSymptoms}/>} 
                                              label="Congestion" />
                                      <FormControlLabel control={ 
                                              <Checkbox id="dry-cough" name="dry-cough" value="Dry Hacking Cough" onClick={this.onClickSymptoms}/>} 
                                              label="Dry, Hacking Cough" />
                                      <FormControlLabel control={ 
                                              <Checkbox id="blue-lips-face" name="blue-lips-face" value="Bluish Lips/Face" onClick={this.onClickSymptoms}/>} 
                                              label="Bluish Lips and/or Face" />
                                      <FormControlLabel control={
                                              <Checkbox id="feet-hand-lesions" name="feet-hand-lesions" value="Feet/Hand Lesions" onClick={this.onClickSymptoms}/>} 
                                              label="Feet and Hand Lesions" />
                                      <FormControlLabel control={
                                              <Checkbox id="confusion" name="confusion" value="Confusion" onClick={this.onClickSymptoms}/>} 
                                              label="Confusion" />
                                      <FormControlLabel control={
                                              <Checkbox id="difficulty-breathing" name="difficulty-breathing" value="Difficulty Breathing" onClick={this.onClickSymptoms}/>} 
                                              label="Difficulty Breathing"/>
                                      <FormControlLabel control={
                                              <Checkbox id="dizziness" name="dizziness" value="Dizziness" onClick={this.onClickSymptoms}/>}
                                              label="Dizziness" />
                                      <FormControlLabel control={
                                              <Checkbox id="ear-pain" name="ear-pain" value="Ear Pain" onClick={this.onClickSymptoms}/>}
                                              label="Ear Pain"/>
                                      <FormControlLabel control={ 
                                              <Checkbox id="stay-awake" name="stay-awake" value="Inability To Stay Awake" onClick={this.onClickSymptoms}/>} 
                                              label="Inability to Stay Awake"/>
                                      <FormControlLabel control={ 
                                              <Checkbox id="vomitting" name="vomitting" value="Vomitting" onClick={this.onClickSymptoms}/>}
                                              label="Vomitting"/>
                                      <FormControlLabel control={
                                              <Checkbox id="red-eyes" name="red-eyes" value="Red, irritated eyes" onClick={this.onClickSymptoms}/>} 
                                              label="Red Irritated Eyes"/>
                                      <FormControlLabel control={ 
                                              <Checkbox id="fatigue" name="fatigue" value="Fatigue" onClick={this.onClickSymptoms}/>} 
                                              label="Fatigue"/>
                                      <FormControlLabel control={
                                              <Checkbox id="chest-pain" name="chest-pain" value="Chest Pain" onClick={this.onClickSymptoms}/>} 
                                              label="Chest Pain/Tightness"/>
                                      <FormControlLabel control={
                                              <Checkbox id="sharp-pain" name="sharp-pain" value="Sharp, Stabbing Pain" onClick={this.onClickSymptoms}/>} 
                                              label="Sharp, Stabbing Pain"/>
                                      <FormControlLabel control={
                                              <Checkbox id="loss-taste-smell" name="loss-taste-smell" value="Loss of Taste/Smell" onClick={this.onClickSymptoms}/>} 
                                              label="Loss of Taste/Smell"/>
                                  <div>
                                  <TextField id="symptoms-not-listed" placeholder="Symptoms/Mental Health Status Not Listed" rows="7" cols="60"
                                          onChange={this.handleInputChangeFor('symptomsNotListed')}/>
                                  </div>
                          </FormGroup>
                      </FormControl>

              </Grid>

              < Grid item xs id="treatment">
                <h3 className="daily-logger-h3">3. Treatment</h3>
                <Grid container spacing={2}>
                  <FormControl component="fieldset" >
                        <FormLabel component="legend">What treatment are you taking today?</FormLabel>
                              <FormGroup>
                                  <Grid item xs>
                                  <FormControlLabel control={
                                          <Checkbox id="remdesivir" name="remdesivir" value="Remdesivir" onClick={this.onClickTreatment}/>} 
                                          label="Remdesivir" />
                                  <FormControlLabel control={
                                      <Checkbox id="dexamethasone" name="dexamethasone" value="Dexamethasone" onClick={this.onClickTreatment}/>} 
                                      label="Dexamethasone"/>
                                  <FormControlLabel control={
                                          <Checkbox id="Convalescent Plasma" name="convalescent-plasma" value="Convalescent Plasma" onClick={this.onClickTreatment}/>} 
                                          label="Convalescent Plasma"/>
                                  <FormControlLabel control={ 
                                          <Checkbox id="kevzara" name="kevzara" value="Kevzara" onClick={this.onClickTreatment}/>} 
                                          label="Kevzara"/>
                                  <FormControlLabel control={
                                          <Checkbox id="calquence" name="calquence" value="Calquence" onClick={this.onClickTreatment}/>} 
                                          label="Calquence"/>
                                  <FormControlLabel control={
                                          <Checkbox id="colcrys" name="colcrys" value="Colcrys" onClick={this.onClickTreatment}/>} 
                                          label="Colcrys"/>
                                  <FormControlLabel control={
                                          <Checkbox id="xeljanz" name="xeljanz" value="Xeljanz" onClick={this.onClickTreatment}/>} 
                                          label="Xeljanz"/>
                                  <FormControlLabel control={ 
                                          <Checkbox id="jakafi" name="jakafi" value="Jakafi" onClick={this.onClickTreatment}/>} 
                                          label="Jakafi"/>
                                  <FormControlLabel control={
                                          <Checkbox id="tocilizumab" name="tocilizumab" value="Tocilizumab" onClick={this.onClickTreatment}/>} 
                                          label="Tocilizumab"/>
                                  <FormControlLabel control={
                                          <Checkbox id="pro-140" name="pro-140" value="Pro-140 Leronlimab " onClick={this.onClickTreatment}/>} 
                                          label="Pro-140 Leronlimab"/>
                                  <FormControlLabel control={
                                          <Checkbox id="olumiant" name="olumiant" value="Olumiant" onClick={this.onClickTreatment}/>} 
                                          label="Olumiant"/>
                              </Grid>
                              <Grid item xs>
                                  <FormControlLabel control={
                                          <Checkbox id="kineret" name="kineret" value="Kineret" onClick={this.onClickTreatment}/>} 
                                          label="Kineret"/>
                                  <FormControlLabel control={
                                          <Checkbox id="ilaris" name="ilaris" value="Ilaris" onClick={this.onClickTreatment}/>} 
                                          label="Ilaris"/>
                                  <FormControlLabel control={ 
                                          <Checkbox id="regeneron" name="regeneron" value="Regeneron" onClick={this.onClickTreatment}/>} 
                                          label="Regeneron"/>
                                  <FormControlLabel control={
                                          <Checkbox id="otezla" name="otezla" value="Otezla" onClick={this.onClickTreatment}/>} 
                                          label="Otezla"/>
                                  <FormControlLabel control={
                                          <Checkbox id="mavrilimumab" name="mavrilimumab" value="Mavrilimumab" onClick={this.onClickTreatment}/>} 
                                          label="Mavrilimumab"/> 
                                  <FormControlLabel control={
                                          <Checkbox id="ivermectin" name="ivermectin" value="Ivermectin" onClick={this.onClickTreatment}/>} 
                                          label="Ivermectin"/>
                                  <FormControlLabel control={
                                          <Checkbox id="azithromycin" name="azithromycin" value="Azithromycin" onClick={this.onClickTreatment}/>} 
                                          label="Azithromycin"/>
                                  <FormControlLabel control={
                                          <Checkbox id="kaletra" name="kaletra" value="Kaletra" onClick={this.onClickTreatment}/>} 
                                          label="Kaletra"/>
                                  <FormControlLabel control={
                                          <Checkbox id="tamiflu" name="tamiflu" value="Tamiflu" onClick={this.onClickTreatment}/>} 
                                          label="Tamiflu"/>
                                  <FormControlLabel control={ 
                                          <Checkbox id="hydroxychloroquine" name="hydroxychloroquine" value="Hydroxychloroquine" onClick={this.onClickTreatment}/>} 
                                          label="Hydroxychloroquine"/>
                              <div>
                                      <textarea id="treatments-not-listed" placeholder="Treatment Not Listed" rows="7" cols="60"
                                      onChange={this.handleInputChangeFor('treatmentNotListed')}>
                                      </textarea>
                              </div>
                              </Grid>
                          </FormGroup>
                </FormControl>
                
                </Grid>
              </Grid>
            
                                      
              <Grid item xs id="feelings">
                  <h3 className="daily-logger-h3">4. Feelings to Current Treatment</h3>
                      <FormControl component="fieldset" >
                          <FormLabel component="legend">What are your feelings and thoughts towards the treatment you are currently on today?</FormLabel>        
                              <RadioGroup>                        
                                  <FormControlLabel id="positive" name="positive" value="Positive" control={<Radio onClick={this.onClickFeelings}/>} 
                                          label="Positive"/>
                                  <FormControlLabel id="negative" name="negative" value="Negative" control={<Radio onClick={this.onClickFeelings}/>} 
                                          label="Negative"/>
                              </RadioGroup>
                      </FormControl>
              </Grid>


              <Grid item xs id="reactions">
            <h3 className="daily-logger-h3">5. Reaction(s) to Treatment</h3>
              <FormControl component="fieldset" >
                  <FormLabel component="legend">What are your reactions to your current treatment?</FormLabel>
                      <FormGroup>
                                    <FormControlLabel control={
                                            <Checkbox id="nausea" name="nausea" value="Nausea" onClick={this.onClickReactions}/>} 
                                            label="Nausea"/>
                                    <FormControlLabel control={
                                            <Checkbox id="headaches" name="headaches" value="Headaches" onClick={this.onClickReactions}/>} 
                                            label="Headaches"/>
                                    <FormControlLabel control={
                                            <Checkbox id="vomitting" name="vomitting" value="Vomitting" onClick={this.onClickReactions}/>} 
                                            label="Vomitting"/>          
                                    <FormControlLabel control={
                                            <Checkbox id="hives" name="hives" value="Hives" onClick={this.onClickReactions}/>} 
                                            label="Hives"/>             
                                    <FormControlLabel control={
                                            <Checkbox id="dry-mouth" name="dry-mouth" value="Dry Mouth" onClick={this.onClickReactions}/>} 
                                            label="Dry Mouth"/>
                                    <FormControlLabel control={
                                            <Checkbox id="rash" name="rash" value="Rash" onClick={this.onClickReactions}/>} 
                                            label="Negative"/>
                                        <FormControlLabel control={
                                            <Checkbox id="anaphylatic-shock" name="anaphylatic-shock" value="Anaphylatic Shock" onClick={this.onClickReactions}/>} 
                                            label="Anaphylatic Shock"/>
                                <div>
                                        <textarea id="reactions-not-listed" placeholder="Reaction(s) Not Listed" rows="7" cols="60"
                                        onChange={this.handleInputChangeFor('reactionsNotListed')}>
                                        </textarea>
                                </div>
                      </FormGroup>
              </FormControl>
        </Grid>
        </Grid>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataEdit);

