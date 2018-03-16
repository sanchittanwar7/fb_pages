import React, {Component} from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Table from './Table'


export default class Header extends Component{

	constructor(props){
		super(props);
		this.state = {
			query: "",
			data: null
		}
		
	}

	search(){
		console.log(this.state.query)

		Meteor.call("find.pages", this.state.query, (err, res) => {
			if(err)
				console.log(err)
			else{
				console.log("result of searching page : ", res)
				if(res === undefined){
					console.log("hitting  api")
					Meteor.call("get_long_token", "long", (err, res) => {
						if(err){
							console.log("err : ", err)
						}
						else{
							Meteor.call("get_pages", this.state.query,res, (err, res) => {
								if(err)
									console.log(err)
								else{
									console.log("res", res.data.data);
									Meteor.call("insert.pages", this.state.query, res.data.data);
									this.setState({data: res.data.data})
								}
							})

						}
					})
				}
				else{
					this.setState({data: res.details})
					console.log("already exist")
				}
			}
		})


		// Meteor.call("get_long_token", "long", (err, res) => {
		// 	if(err){
		// 		console.log("err : ", err)
		// 	}
		// 	else{
		// 		// console.log("res : ", res)
		// 		Meteor.call("get_pages", this.state.query,res, (err, res) => {
		// 			if(err)
		// 				console.log(err)
		// 			else{
		// 				console.log("res", res.data.data);
		// 				Meteor.call("insert.pages", this.state.query, res.data.data);
		// 				this.setState({data: res})
		// 			}
		// 		})

		// 	}
		// })




	}


	render() {
		let props = this.props

		return (
			<div>
			<nav className="navbar navbar-default">
			<div className="container-fluid">
			<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span className="sr-only">Toggle navigation</span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>        <span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="#">{props.brandName}</a>
			</div>


			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul className="nav navbar-nav">
			<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
			<li><a href="#">Link</a></li>
			<li className="dropdown">
			<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
			<ul className="dropdown-menu">
			<li><a href="#">Action</a></li>
			<li><a href="#">Another action</a></li>
			<li><a href="#">Something else here</a></li>
			<li role="separator" className="divider"></li>
			<li><a href="#">Separated link</a></li>
			<li role="separator" className="divider"></li>
			<li><a href="#">One more separated link</a></li>
			</ul>
			</li>
			</ul>



			<FormGroup>
			<InputGroup>
			<FormControl
			type = "text"
			placeholder = "Search for an artist"
			value = {this.state.query}
			onChange = {event => {this.setState({query: event.target.value});}}
			onKeyPress = { event => {
				if(event.key === 'Enter'){
					this.search();
				}
			}}
			/>
			<InputGroup.Addon className =  "searchButton" onClick = {() => this.search()}>
			<Glyphicon glyph = "search"></Glyphicon>
			</InputGroup.Addon>
			</InputGroup>
			</FormGroup>




			
			</div>
			</div>
			</nav>
			{
				this.state.data !== null
				?
				<Table 
				data = {this.state.data}
				/>
				:
				<div></div>
			}	
			</div>
			)
	}
}