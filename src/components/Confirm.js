import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Appbar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.previousStep()
    }
    
    render() {
        const {values:{firstName, lastName, email, occupation, city, bio}} = this.props
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <Appbar title ="Confirm your details"/>   
                    <List>
                        <ListItem
                            primaryText="First name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="last name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="city"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="bio"
                            secondaryText={bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <br/>
                    <RaisedButton
                        label="Confirm"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}

const styles= {
    button: {
        margin: 15
    }
}

export default Confirm
