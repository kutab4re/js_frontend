import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { swordAdd } from './actions';

class SwordAddInner extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            swordName: '',
			swordType: ''
        }
        
        this.onSwordNameChange = this.onSwordNameChange.bind(this);
        this.onSwordTypeChange = this.onSwordTypeChange.bind(this);
		this.onAddSwordFormSubmit = this.onAddSwordFormSubmit.bind(this);
    }
	
	onSwordNameChange(e){
		e.preventDefault();
		
		this.setState({
            swordName: e.target.value
        });
	}
	
	onSwordTypeChange(e){
		e.preventDefault();
		
		this.setState({
            swordType: e.target.value
        });
	}
	
    onAddSwordFormSubmit(e) {
		e.preventDefault();

		fetch('swords', {
			method: 'POST',
			body: JSON.stringify({
				swordName: this.state.swordName,
				swordType: this.state.swordType
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			this.props.dispatch(swordAdd(data._id, data.swordName, data.swordType))
			this.props.history('/');
		});
	}
    
    render() { 
        return (
			<div className="Add">
				<NavLink to='/' className="NavLinkButton"> Back to Inventory </NavLink> 
				<form onSubmit={this.onAddSwordFormSubmit}>
					<input type="text" value={this.state.swordName} onChange={this.onSwordNameChange} placeholder="Sword Name" />
					<input type="text" value={this.state.swordType} onChange={this.onSwordTypeChange} placeholder="Sword Type (e.g., Katana, Claymore)"/>
					<input type="submit" value="Add Sword" />
				</form>
			</div>
        )
    }
}

const SwordAdd = (props) => {
	return (
		<SwordAddInner {...props} history={useNavigate()} />
	)
}

export default connect()(SwordAdd);