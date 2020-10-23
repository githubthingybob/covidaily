import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DataEditItem from '../DataEditItem/DataEditItem';
import './DateEdit.css'

//styling and materialUI
import {FormHelperText, RadioGroup, Radio, FormLabel, FormControl, Button, 
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
                    logID: Number(this.props.match.params.id),
                    bloodPressure: ''
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
        
            this.props.dispatch({
              type: 'EDIT_LOG',
              payload: this.state
            })
        // this.props.history.push('/data')
        // window.location.reload();
      }

      handleInputChangeFor = (propertyName) => (event) => {       
          this.setState({
                  ...this.state,
                    [propertyName]: event.target.value,
                    bloodPressure: `${String(this.state.systolic)}/${String(this.state.diastolic)}`
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
        console.log('EDIT STATE', this.state)
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
        <div id="daily-edit-container">
<Grid container spacing={5}>
<Grid item xs id="vitals">
          <h3 className="daily-edit-h3">1. Vitals</h3>
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
        

        
          <h3 className="daily-edit-h3">2. Symptoms</h3>
                <FormControl component="fieldset" error={this.state.error}>
                <FormLabel component="legend">What symptoms do you have today?</FormLabel>
                <Grid container>
                    <FormGroup>
                        <FormHelperText>{this.state.helperText}</FormHelperText>
                        <Grid item xs>
                                <FormControlLabel control={
                                        <Checkbox className="symptoms-label" id="personality-change" name="personality-change" value="Personality Change" onClick={this.onClickSymptoms}/>} 
                                        label="Personality Change" />
                                <FormControlLabel control={
                                        <Checkbox id="congestion" name="congestion" value="Congestion" onClick={this.onClickSymptoms}/>} 
                                        label="Congestion" />
                                <FormControlLabel control={ 
                                        <Checkbox id="dry-cough" name="dry-cough" value="Dry Hacking Cough" onClick={this.onClickSymptoms}/>} 
                                        label="Dry, Hacking Cough"/>
                        </Grid>
                        <Grid item xs>
                                <FormControlLabel control={ 
                                        <Checkbox id="blue-lips-face" name="blue-lips-face" value="Bluish Lips/Face" onClick={this.onClickSymptoms}/>} 
                                        label="Bluish Lips and/or Face" />
                                <FormControlLabel control={
                                        <Checkbox id="feet-hand-lesions" name="feet-hand-lesions" value="Feet/Hand Lesions" onClick={this.onClickSymptoms}/>} 
                                        label="Feet and Hand Lesions" />
                                <FormControlLabel control={
                                        <Checkbox id="confusion" name="confusion" value="Confusion" onClick={this.onClickSymptoms}/>} 
                                        label="Confusion" />
                                </Grid>
                        <Grid item xs>
                                <FormControlLabel control={
                                        <Checkbox id="difficulty-breathing" name="difficulty-breathing" value="Difficulty Breathing" onClick={this.onClickSymptoms}/>} 
                                        label="Difficulty Breathing"/>
                                
                                <FormControlLabel control={
                                        <Checkbox id="dizziness" name="dizziness" value="Dizziness" onClick={this.onClickSymptoms}/>}
                                        label="Dizziness" />
                                <FormControlLabel control={
                                        <Checkbox id="ear-pain" name="ear-pain" value="Ear Pain" onClick={this.onClickSymptoms}/>}
                                        label="Ear Pain"/>
                        </Grid>
                        <Grid item xs>
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
                        </Grid>
                        <Grid item xs>
                                <FormControlLabel control={
                                        <Checkbox id="sharp-pain" name="sharp-pain" value="Sharp, Stabbing Pain" onClick={this.onClickSymptoms}/>} 
                                        label="Sharp, Stabbing Pain"/>
                                
                                <FormControlLabel control={
                                        <Checkbox id="loss-taste-smell" name="loss-taste-smell" value="Loss of Taste/Smell" onClick={this.onClickSymptoms}/>} 
                                        label="Loss of Taste/Smell"/></Grid>
                            <div>
                            <TextField id="symptoms-not-listed" 
                                placeholder="Symptoms/Mental Health Status Not Listed" 
                                multiline
                                variant="outlined"
                                fullWidth
                                rows={5}
                                    onChange={this.handleInputChangeFor('symptomsNotListed')}/>
                            </div>
                        </FormGroup>
                </Grid>
        </FormControl>
</Grid>

<Grid item xs id="treatment">
        <h3 className="daily-edit-h3">3. Treatment</h3>
          <Grid container>
            <FormControl component="fieldset" error={this.state.error}>
                  <FormLabel component="legend">What treatment are you taking today?</FormLabel>
                        <FormGroup>
                            <FormHelperText>{this.state.helperText}</FormHelperText>
                        <Grid item xs={10}>
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
                        <Grid item xs={10}>
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
                                <TextField id="treatments-not-listed" 
                                placeholder="Treatment Not Listed" 
                                multiline
                                variant="outlined"
                                fullWidth
                                rows={5}
                                onChange={this.handleInputChangeFor('treatmentNotListed')}>
                                </TextField>
                        </div>
                        </Grid>
                    </FormGroup>
          </FormControl>      
          </Grid>
          <Grid item xs>
                  <h3 className="daily-edit-h3">4. Feelings to Current Treatment</h3>
                <FormControl component="fieldset" error={this.state.error}>
                    <FormLabel component="legend">What are your feelings and thoughts towards the treatment you are currently on today?</FormLabel>
                        <FormHelperText>{this.state.helperText}</FormHelperText>
                        <RadioGroup>                        
                            <FormControlLabel id="positive" name="positive" value="Positive" control={<Radio onClick={this.onClickFeelings}/>} 
                                    label="Positive"/>
                            <FormControlLabel id="negative" name="negative" value="Negative" control={<Radio onClick={this.onClickFeelings}/>} 
                                    label="Negative"/>
                        </RadioGroup>
                </FormControl>
        </Grid>
</Grid>
        <Grid item xs id="reactions">
            <h3 className="daily-edit-h3">5. Reaction(s) to Treatment</h3>
            <FormControl component="fieldset" error={this.state.error}>
                <FormLabel component="legend">What are your reactions to your current treatment?</FormLabel>
                    <FormGroup>
                        <FormHelperText>{this.state.helperText}</FormHelperText>
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
                                <TextField 
                                id="reactions-not-listed" 
                                placeholder="Reaction(s) Not Listed" 
                                multiline
                                variant="outlined"
                                fullWidth
                                rows={5}
                                onChange={this.handleInputChangeFor('reactionsNotListed')}>
                                </TextField>
                        </div>
                    </FormGroup>
            </FormControl>

        </Grid>

</Grid>                        
        <div id="daily-logger-btn-div">
          <Button id="daily-submit-btn"variant="contained" onClick={this.onSubmitEdit} endIcon ={<ArrowForwardIcon/>}>SUBMIT</Button>      
        </div>
        
</div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataEdit);

