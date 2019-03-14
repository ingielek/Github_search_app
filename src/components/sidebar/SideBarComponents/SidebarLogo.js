import React, { Component } from 'react'
import GithubLogo from '../../../style/GitHub-Logos/GitHub_Logo_White.png'
class SidebarLogo extends Component {
	render() {
		return (
			<div className="sidebarLogo ">
				<img src={GithubLogo} alt="Logo" className="logo"/>
				<p className="logoDescription">Best Repositories</p>
			</div>
		)
	}
}

export default SidebarLogo;