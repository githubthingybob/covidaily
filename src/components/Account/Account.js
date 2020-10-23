import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {HashRouter, Link} from 'react-router-dom';

//styling
import './Account.css'
import {List, ListItem, Button, ListItemIcon} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BugReportIcon from '@material-ui/icons/BugReport';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import MoodIcon from '@material-ui/icons/Mood';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WcIcon from '@material-ui/icons/Wc';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
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
        <div id="update-div">
            <Link to="/accountupdate">
                <Button id="update-btn" endIcon ={<ArrowForwardIcon/>}>Update Account</Button>
            </Link>
        </div>
        
        <Grid container alignItems="center" justify="space-evenly" id="main-account">
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q0"><ListItemIcon><AccountCircleIcon className="icon"/></ListItemIcon>{this.props.store.user.username}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q0"><ListItemIcon><FingerprintIcon className="icon"/></ListItemIcon>{this.props.store.user.id}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q0"><ListItemIcon><EmailIcon className="icon"/></ListItemIcon>{this.props.store.user.email}</ListItem>
                    </List>
                </Grid>
        </Grid>
        <Grid container spacing={5} id="true-false-grid">
                <Grid item xs>
                     <List dense>
                        <ListItem className="grid-q1">Have you ever tested positive for COVID-19?</ListItem>
                        <ListItem><ListItemIcon><BugReportIcon className="icon"/></ListItemIcon>{this.state.covid}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q1">Are you currently suffering from Covid-like symptoms?</ListItem>
                        <ListItem><ListItemIcon><BugReportIcon className="icon"/></ListItemIcon>{this.state.covidSymptoms}</ListItem>
                    </List></Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q1">Are you a smoker or second-hand smoker?</ListItem>
                        <ListItem><ListItemIcon><SmokingRoomsIcon className="icon"/></ListItemIcon>{this.state.cigs}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q1">Do you take a daily multi-vitamin?</ListItem>
                        <ListItem><ListItemIcon><LocalPharmacyIcon className="icon"/></ListItemIcon>{this.state.vitamins}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q1">Do you have medical insurance?</ListItem>
                        <ListItem><ListItemIcon><LocalHospitalIcon className="icon"/></ListItemIcon>{this.state.insurance}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q1">Do you have children who attend daycare/or school in person?</ListItem>
                        <ListItem><ListItemIcon><ChildCareIcon className="icon"/></ListItemIcon>{this.state.children}</ListItem>
                    </List>
                </Grid>
                <Grid item xs>
                    <List dense>
                        <ListItem className="grid-q1">Has your life been negatively affected by COVID-19?</ListItem>
                        <ListItem><ListItemIcon><ExposureNeg1Icon className="icon"/></ListItemIcon>{this.state.negative}</ListItem>
                    </List>
                </Grid>
        </Grid>
        <Grid container spacing={5} id="varies-grid">
                        <Grid item xs={4} >
                            <List dense className="grid-list" >
                                <ListItem className="grid-q">Extrovert or Introvert</ListItem>
                                <ListItem><ListItemIcon><MoodIcon className="icon"/></ListItemIcon>{this.props.store.user.personality}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Type of Air-Conditioning System</ListItem>
                                <ListItem><ListItemIcon><AcUnitIcon className="icon"/></ListItemIcon>{this.props.store.user.AC}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs ={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Type of Current Residence</ListItem>
                                <ListItem><ListItemIcon><HomeIcon className="icon"/></ListItemIcon>{this.props.store.user.residence}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Type of Current Water</ListItem>
                                <ListItem><ListItemIcon><LocalDrinkIcon className="icon"/></ListItemIcon>{this.props.store.user.water}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Race</ListItem>
                                <ListItem><ListItemIcon><GroupIcon className="icon"/></ListItemIcon>{this.props.store.user.race}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense>
                                <ListItem className="grid-q">Type of Current Development</ListItem>
                                <ListItem><ListItemIcon><LocationCityIcon className="icon"/></ListItemIcon>{this.props.store.user.development}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Monthly Average of Hospital/Clinic Visits</ListItem>
                                <ListItem><ListItemIcon><HealingIcon className="icon"/></ListItemIcon>{this.props.store.user.visits}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Biological Sex</ListItem>
                                <ListItem><ListItemIcon><WcIcon className="icon"/></ListItemIcon>{this.props.store.user.sex}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Age Range</ListItem>
                                <ListItem><ListItemIcon><SupervisorAccountIcon className="icon"/></ListItemIcon>{this.props.store.user.age}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Income Range</ListItem>
                                <ListItem><ListItemIcon><AttachMoneyIcon className="icon"/></ListItemIcon>{this.props.store.user.income}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Monthly Average of Social Gatherings of People(3+)</ListItem>
                                <ListItem><ListItemIcon><GroupAddIcon className="icon"/></ListItemIcon>{this.props.store.user.social}</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4}>
                            <List dense className="grid-list">
                                <ListItem className="grid-q">Weight Range</ListItem>
                                <ListItem><ListItemIcon><FitnessCenterIcon className="icon"/></ListItemIcon>{this.props.store.user.weight}</ListItem>
                            </List>
                </Grid>
        </Grid>

      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(Account);

