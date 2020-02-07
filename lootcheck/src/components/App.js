import React from 'react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Wallet from './Wallet';

configure({ adapter: new Adapter() });

class App extends React.Component {
	render(){
		return (
			<div>
				<h2>Loot Check</h2>
				<hr />
				<Wallet />
			</div>
		);	
	}
}

export default App;