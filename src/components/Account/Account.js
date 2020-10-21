import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {HashRouter, Link} from 'react-router-dom';

//styling
import './Account.css'
import {FormLabel, FormControl, List, ListItem, Button, 
    FormControlLabel, FormGroup, ListItemIcon} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid'
import {AccountCircleIcon, EmailIcon} from '@material-ui/icons/';

class Account extends Component {
    state = {
        email: String(this.props.store.user.email),
        covid: String(this.props.store.user.covid),
        covidSymptoms: String(this.props.store.user.covid_symptoms),
        cigs: String(this.props.store.user.covid),
        vitamins: String(this.props.store.user.vitamins),
        insurance: String(this.props.store.user.insurance),
        children: String(this.props.store.user.children),
        negative: String(this.props.store.user.negative),
    }

    componentDidMount=()=>{
        this.props.dispatch({
            type: "FETCH_USER"
        })
    }

  render() {
    return (
        <HashRouter>
      <div id="account-container">
          <div>
              <Link to="/accountupdate"><Button>Update Account</Button></Link>
          </div>

        <Grid container spacing={2}>
                <Grid item xs>
                    <List dense>
                        <ListItem><ListItemIcon><AccountCircleIcon/></ListItemIcon>{this.props.store.user.username}</ListItem>
                    </List>
                </Grid>
                
                <Grid item xs>
                    <List dense>
                        <ListItem><ListItemIcon><EmailIcon/></ListItemIcon>{this.props.store.user.email}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>Email </Grid>
                    

        </Grid>
        <Grid>
                <Grid item xs>Covid Positive </Grid>
                    <div>{this.state.covid}</div>
                <Grid item xs>Covid-like Symptoms?</Grid>
                    <div>{this.state.covidSymptoms}</div>
                <Grid item xs>Smoker or 2nd Hand Smoker? </Grid>
                    <div>{this.state.cigs}</div>
                <Grid item xs>Take daily vitamins? </Grid>
                    <div>{this.state.vitamins}</div>
                <Grid item xs>Have medical insurance? </Grid>
                    <div>{this.state.insurance}</div>
                <Grid item xs>Children in daycare/school in person? </Grid>
                    <div>{this.state.children}</div>
                <Grid item xs>Negatively affected by COVID-19? </Grid>
                    <div>{this.state.negative}</div>
        </Grid>
        <Grid>
                <Grid item xs>Personality </Grid>
                    <div>{this.props.store.user.personality}</div>
                <Grid item xs>Air Conditioning Type </Grid>
                    <div>{this.props.store.user.AC}</div>
                <Grid item xs>Type of Residence </Grid>
                    <div>{this.props.store.user.residence}</div>
                <Grid item xs>Type of water </Grid>
                    <div>{this.props.store.user.water}</div>
                <Grid item xs>Race </Grid>
                    <div>{this.props.store.user.race}</div>
                <Grid item xs>Type of Development </Grid>
                    <div>{this.props.store.user.development}</div>
                <Grid item xs>Average Monthly Hospital/Clinic Visits </Grid>
                    <div>{this.props.store.user.visits}</div>
                <Grid item xs>Sex </Grid>
                    <div>{this.props.store.user.sex}</div>
                <Grid item xs>Age Range </Grid>
                    <div>{this.props.store.user.age}</div>
                <Grid item xs>Income Range </Grid>
                    <div>{this.props.store.user.income}</div>
                <Grid item xs>Average Monthly Social Visits (3+ people) </Grid>
                    <div>{this.props.store.user.social}</div>
                <Grid item xs>Weight Range </Grid>
                    <div>{this.props.store.user.weight}</div>

        </Grid>

      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(Account);

