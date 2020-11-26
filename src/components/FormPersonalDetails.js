import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Appbar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.previousStep()
    }
    render() {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <Appbar title ="Enter City"/>   
                    <TextField
                        hintText="Enter your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your occupation"
                        floatingLabelText="occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label="back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Continue"
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

export default FormPersonalDetails
