import React, { Component } from 'react'

class HeaderComponent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<header>
				<h1> RA TECH </h1>
						
				<a href="/benefits/">Listar Benefícios</a> | 
				<a href="/benefits/new">Upload Benefícios</a>
							
			</header>
		)
	}
}

export default HeaderComponent