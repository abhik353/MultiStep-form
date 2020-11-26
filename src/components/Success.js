import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Appbar from 'material-ui/AppBar'

class Success extends Component {
    
    render() {
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <Appbar title ="Confirm your details"/>
                    <h1>Successful</h1>
                </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}

export default Success
