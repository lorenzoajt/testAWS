import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component {

	continue = e =>{
		e.preventDefault()
		this.props.nextStep()
	}
	back = e =>{
		e.preventDefault()
		this.props.prevStep()
	}
	render() {
		const {values, handleChange} = this.props
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter Personal Details"/>
					<TextField
						hintText="Your Occupation"
						floatingLabelText="Occupation"
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
					/>
					<br/>
					<TextField
						hintText="Your city"
						floatingLabelText="City"
						onChange={handleChange('city')}
						defaultValue={values.city}
					/>
					<br/>
					<TextField
						hintText="Your bio"
						floatingLabelText="bio"
						onChange={handleChange('bio')}
						defaultValue={values.bio}
					/>
					<br/>
					<RaisedButton	
						label="back"
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