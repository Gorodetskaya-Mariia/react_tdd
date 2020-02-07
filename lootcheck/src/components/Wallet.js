import React from 'react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { connect } from 'react-redux';
import { deposit } from '../actions/balance';

configure({ adapter: new Adapter() });

export class Wallet extends React.Component {
	constructor(){
		super();

		this.state = { balance: undefined };
	}

	updateBalance = event => this.setState( { balance: parseInt(event.target.value, 10)});

	deposit = () => this.props.deposit(this.state.balance);

	render(){
		return (
			<div>
				<h3 className='balance'>Wallet balance: { this.props.balance}</h3>
				<br/>
				<input className="input-wallet" onChange={this.updateBalance}/>
				<button className='btn-deposit' onClick={this.deposit}>Deposit</button>
			</div>
		)
	}
}

export default connect(state => { return { balance: state } }, { deposit })(Wallet);