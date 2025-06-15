import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import SwordItem from './SwordItem';

class SwordList extends React.Component {
	render() { 
		return (
			<div className="List">
				<NavLink to='/add' className="NavLinkButton"> Add Sword </NavLink> 
				<ul>
				{
					this.props.inventory.map((sword) => {
						return (
							<SwordItem sword={sword} key={sword._id}/>
						)
					})
				}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		inventory: [...state.inventory]
	}
}

export default connect(mapStateToProps)(SwordList);