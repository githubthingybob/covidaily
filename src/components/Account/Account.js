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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

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
              <Link to="/accountupdate"><Button>Update Account</Button></Link>
        <Grid container spacing={2} id="main-account">
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q"><ListItemIcon><AccountCircleIcon className="icon"/></ListItemIcon>{this.props.store.user.username}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q"><ListItemIcon><FingerprintIcon className="icon"/></ListItemIcon>{this.props.store.user.id}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q"><ListItemIcon><EmailIcon className="icon"/></ListItemIcon>{this.props.store.user.email}</ListItem>
                    </List>
                </Grid>
                    

        </Grid>

        <Grid container spacing={5} id="true-false-grid">
                <Grid item xs>
                     <List dense>
                        <ListItem className="grid-q">Have you ever tested positive for COVID-19?</ListItem>
                        <ListItem>{this.state.covid}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q">Are you currently suffering from Covid-like symptoms?</ListItem>
                        <ListItem>{this.state.covidSymptoms}</ListItem>
                    </List></Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q">Are you a smoker or second-hand smoker?</ListItem>
                        <ListItem>{this.state.cigs}</ListItem>
                    </List>
                </Grid>

                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q">Do you take a daily multi-vitamin?</ListItem>
                        <ListItem>{this.state.vitamins}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q">Do you have medical insurance?</ListItem>
                        <ListItem>{this.state.insurance}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q">Do you have children who attend daycare/or school in person?</ListItem>
                        <ListItem>{this.state.children}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q">Has your life been negatively affected by COVID-19?</ListItem>
                        <ListItem>{this.state.negative}</ListItem>
                    </List>
                </Grid>
        </Grid>
        <Grid container spacing={5} id="varies-grid">
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Extrovert or Introvert</ListItem>
                                <ListItem>{this.props.store.user.personality}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Type of Air-Conditioning System</ListItem>
                                <ListItem>{this.props.store.user.AC}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs ={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Type of Current Residence</ListItem>
                                <ListItem>{this.props.store.user.residence}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Type of Current Water</ListItem>
                                <ListItem>{this.props.store.user.water}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Race</ListItem>
                                <ListItem>{this.props.store.user.race}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense>
                                <ListItem className="grid-q">Type of Current Development</ListItem>
                                <ListItem>{this.props.store.user.development}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Monthly Average of Hospital/Clinic Visits</ListItem>
                                <ListItem>{this.props.store.user.visits}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Biological Sex</ListItem>
                                <ListItem>{this.props.store.user.sex}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Age Range</ListItem>
                                <ListItem>{this.props.store.user.age}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Income Range</ListItem>
                                <ListItem>{this.props.store.user.income}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Monthly Average of Social Gatherings of People(3+)</ListItem>
                                <ListItem>{this.props.store.user.social}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Weight Range</ListItem>
                                <ListItem>{this.props.store.user.weight}</ListItem>
                            </List>
                </Grid>
        </Grid>

      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(Account);

