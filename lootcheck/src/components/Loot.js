import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

configure({ adapter: new Adapter() });

export class Loot extends React.Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) return "";
    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
    );
  }

  render() {
    return <h3>Bitcoin balance: {this.computeBitcoin()}</h3>;
  }
}

export default connect(state => state, { fetchBitcoin })(Loot);