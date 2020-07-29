import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component {

	continue = e =>{
		e.preventDefault()
		//send data to API here
		this.props.nextStep()
	}
	back = e =>{
		e.preventDefault()
		this.props.prevStep()
	}
	render() {
		const {values:{firstName, lastName, email, occupation, city, bio}} = this.props
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Confirm user Data"/>
					<List>
						<ListItem	
							primaryText="First Name"
							secondaryText={firstName}
						/>
						<ListItem
							primaryText="Last Name"
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
					<RaisedButton	
						label="Confirm & Continue"
						primary={false}
						styles={styles.button}
						onClick={this.back}
					/>
					
					<RaisedButton	
						label="continue"
						primary={true}
						styles={styles.button}
						onClick={this.continue}
					/>
					
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button:{
		margin:15
	}
}
export default FormPersonalDetails