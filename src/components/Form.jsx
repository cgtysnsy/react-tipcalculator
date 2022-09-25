import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      service: 0.1,
      howManyPeople: 0,
      tip: 0,
      showTip: false
    };
  }

  onChange = (event) => {
    this.setState({ showTip: false });
    const inputValue = event.target.value;
    this.setState({ amount: inputValue });
  };
  onChangeSelect = (event) => {
    const selectedValue = event.target.value;
    this.setState({ service: selectedValue });
  };
  onChangePeople = (event) => {
    const numberPeople = event.target.value;
    this.setState({ howManyPeople: numberPeople });
  };
  onClick = () => {
    const { amount, service, howManyPeople } = this.state;
    //const calcTip = ;
    if (howManyPeople) {
      this.setState({ tip: (amount * service) / howManyPeople });
    } else {
      this.setState({ tip: amount * service });
    }
    this.setState({ showTip: true });
  };

  render() {
    return (
      <div>
        <h2>Tip Calculator</h2>
        <label htmlFor="amount">How much was your bill?</label>
        <br />
        <input
          type="number"
          name="amount"
          placeholder="1"
          value={this.state.amount}
          onChange={this.onChange}
        />
        <br />
        <label htmlFor="amount">How was your service?</label>
        <br />
        <select value={this.state.service} onChange={this.onChangeSelect}>
          <option value="0.3">Excellent %30</option>
          <option value="0.2">Very Good %20</option>
          <option value="0.15">Good %15</option>
          <option value="0.1">Not Bad %10</option>
          <option value="0.05">Bad %5</option>
        </select>
        <br />
        <label htmlFor="numberPeople">How many people are sharing bill?</label>
        <br />
        <input
          type="number"
          name="numberPeople"
          value={this.state.howManyPeople}
          onChange={this.onChangePeople}
        />
        <br />
        <button type="submit" onClick={this.onClick}>
          Calculate
        </button>
        {this.state.showTip ? (
          <h3>{`Amount for per person: $ ${this.state.tip}`}</h3>
        ) : null}
      </div>
    );
  }
}
export default Form;
