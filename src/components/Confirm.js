import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
export class Confirm extends Component {
    continue = e => { 
        // Send data to backend to process form
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => { 
        // this function calls prevStep from UserForm
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: {firstName, lastName, email,
            occupation, city, bio}} = this.props; //I think this is defractureing
            // and its pulling data from UserForm
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                       <ListItem
                       primaryText="First Name"
                       secondaryText= {firstName}
                       />
                       <hr></hr>
                       <ListItem
                       primaryText="Last Name"
                       secondaryText= {lastName}
                       />
                       <hr></hr> 
                       <ListItem
                       primaryText="Email"
                       secondaryText= {email}
                       />
                       <hr></hr> 
                       <ListItem
                       primaryText="Occupation"
                       secondaryText= {occupation}
                       />
                       <hr></hr> 
                       <ListItem
                       primaryText="City"
                       secondaryText= {city}
                       />
                       <hr></hr> 
                       <ListItem
                       primaryText="Bio"
                       secondaryText= {bio}
                       /> 
                    </List>
                    <RaisedButton
                    label ="Confirm and Continue"
                    primary={true} // for color white
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton
                    label ="Back"
                    primary={false} // for color white
                    style={styles.button}
                    onClick={this.back}
                    />
                    
                </React.Fragment>
            </MuiThemeProvider>
            
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm