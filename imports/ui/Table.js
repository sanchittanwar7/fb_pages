import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component{
	constructor(props){
		super(props)
	}

	render() {

		let data = this.props.data.data.data
		console.log("props", this.props)
		console.log("data", data)
		return(
			<div>
				<h1>Data</h1>
				{data.map((page, k) => {
					return(
						<div className = "page_info">
							<div>{page.id}</div>
							<div>{page.name}</div>
						</div>
					)
				})}
			</div>
		)
	}
}