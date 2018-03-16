import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component{
	constructor(props){
		super(props)
	}

	render() {
		let data = this.props.data
		// console.log("props", this.props)
		console.log("data", data)
		data.sort((a, b) => b.fan_count - a.fan_count)

		// Meteor.call("get_long_token", "long", (err, res) => {
		// 	if(err){
		// 		console.log("err : ", err)
		// 	}
		// 	else{
		// 		console.log("res : ", res)
		// 		let baseURL = 'https://graph.facebook.com/v2.12/'
		// 		let fields = '?fields=cover,fan_count,rating_count,overall_star_rating,picture&oauth_token='
		// 		let apiURL
		// 		data.map((page, k) => {
		// 			apiURL = `${baseURL}${page.id}${fields}${longToken.token.data.access_token}`
		// 		})
		// 	}
		// })


		return(
			<div>

			{data.map((page, k) => {
				return(
					<div className="card">
						<img className="display-img" src = {page.picture.data.url} />
						{page && page.cover && page.cover.source ? 
							<img className="cover-img" src={page.cover.source} alt="Card image cap" />
							: <div></div>
						}
						<div className="card-body">
							<h5 className="card-title">{page.name}</h5>
							<p>Fan Count : {page.fan_count}</p>
							<p>Rating Count : {page.rating_count}</p>
							<p>Overall Star Rating : {page.overall_star_rating}</p>
						</div>
					</div>
					)
			})}
			</div>
			)
	}
}