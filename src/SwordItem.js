import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { swordDelete, swordUpdateAvailability } from './actions'; 

class SwordItem extends React.Component { 
    constructor(props) {
        super(props)
		
        this.onAvailabilityClick = this.onAvailabilityClick.bind(this); 
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    
    onAvailabilityClick(e) { 
		e.preventDefault();

		fetch(`swords/${this.props.sword._id}`, { 
			method: 'PATCH',
			body: JSON.stringify({
				available: !this.props.sword.available,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			if (res.status === 200) {
				console.log('Availability Updated'); 
				this.props.dispatch(swordUpdateAvailability(this.props.sword._id)); 
			} else {
				console.log('Availability Not updated'); 
			}
		})
	}
    
    onDeleteClick(e) {
        e.preventDefault();
        e.stopPropagation(); 
        
        fetch(`swords/${this.props.sword._id}`, {method: 'DELETE'}) 
            .then(res => {
                if (res.status === 200) {
                    console.log('Delete successful');
					this.props.dispatch(swordDelete(this.props.sword._id)); 
                } else {
                    console.error('Delete failed with status:', res.status);
                }
            })
    }
    
    render() { 
        return (
            <li>
                <span>{this.props.sword.swordName}</span> 
				<span><i>{this.props.sword.swordType}</i></span> 
				<span onClick={this.onAvailabilityClick}><b>{this.props.sword.available ? 'Available' : 'Equipped'}</b></span> {/* Changed prop name and text */}
				<button onClick={this.onDeleteClick}>Discard</button> 
            </li>
        )
    }
}

export default connect()(SwordItem); 