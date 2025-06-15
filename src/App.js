import React from 'react';
import { Provider, connect } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SwordList from './SwordList'; 
import SwordAdd from './SwordAdd'; 
import { swordAddAll } from './actions'; 

class App extends React.Component {
	componentDidMount() {
		fetch('swords').then(function(res) { 
			return res.json();
		}).then((data) => {
			this.props.dispatch(swordAddAll(data)); 
		});
	}

	render() { 
		return (
			<div className="App">
				<Provider store={this.props.store}>
					<Router>
						<Routes>
							<Route path="/" element={<SwordList />} /> 
							<Route path="/add" element={<SwordAdd />} /> 
						</Routes>
					</Router>
				</Provider>
			</div>
		);
	}
}

export default connect()(App);