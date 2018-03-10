import React, { Component } from 'react'

class FBlogin extends Component {

	constructor(props){
		super(props);
		this.state = {
			auth: false,
			token: ""
		}
	}



	FBlogin() {
		let that = this
		let token
		FB.login(function(response) {
			console.log(response)
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				token = response.authResponse.accessToken
				that.setState({token , auth: true})
				Meteor.call("token.insert", token, "short", (err, res) => {
					if(err){
						console.log("err", err)
					}
					else{
						console.log("res : ", res)
						Meteor.call("get_fb_token", token, (err, res) => {
							if(err){
								console.log("fb token err : ", err)
							}
							else{
								console.log("fb long token : ", res)
								Meteor.call("token.insert", res, "long", (err, res) => {
									if(err)
										console.log("long err : ", err)
									else
										console.log("long res : ", res)
								})
							}
						})
					}

				})
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		});
	}

	render() {
		return(
			<div>
				<button  onClick = {this.FBlogin.bind(this)}> Login using FaceBook </button>
				<h1>{this.state.token}</h1>
			</div>
		)
	}
}

export default FBlogin;