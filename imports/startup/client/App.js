import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from '../../ui/Header'
import FBlogin from '../../ui/FBlogin'

var faker = require('faker');

// import Button from '../../ui/Button'
let brandName

export default class  App extends Component {
	constructor(props){
		super(props);
		this.state = {
			brandName: "VOCIQ"
		}
	}

	setSDK(){
		window.fbAsyncInit = function() {
			FB.init({
				appId            : '155683401740536',
				autoLogAppEvents : true,
				xfbml            : true,
				version          : 'v2.12'
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	componentDidMount(){
		this.setSDK()
	}

	func() {
		brandName = faker.company.companyName();
		console.log(brandName)
		this.setState({brandName})
		console.log("yp")
	}
	// let brandName 
	render() {
		return (
			<div>
				<Header 
				brandName = {this.state.brandName}
				/>
				<button onClick = {this.func.bind(this)}>click me</button>
				<FBlogin />
			</div>
			)
	}
}

Meteor.startup( () => {
	ReactDOM.render(<App />, document.querySelector('.render-target'))
});