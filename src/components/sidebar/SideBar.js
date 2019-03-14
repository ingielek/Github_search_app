import React, { Component } from 'react';
import SidebarLogo from './SideBarComponents/SidebarLogo'
import SidebarSearch from './SideBarComponents/SidebarSearch'
class Sidebar extends Component {
	render(){
		return (
			<div className="sideBar">
				<SidebarLogo/>
				<SidebarSearch/>
			</div>
		)
	}
}

export default Sidebar;