import React from 'react';

export class CashExpensesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      input: 0,
      submit: 0,
    };

    this.increment = this.increment.bind(this);
    this.dectement = this.dectement.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 100,
    });
  }
  dectement() {
    this.setState({
      count: this.state.count - 100,
    });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  handleChange(event) {
    const numberValue = parseInt(event.target.value);
    this.setState({
      input: numberValue,
    });
  }
  handleClick() {
    this.setState({
      submit: this.state.submit + this.state.input,
    });
  }
  render() {
    return (
      <>
        <h1>Cash Expenses</h1>
        <br />
        <br />
        <button onClick={this.increment}>+ 100$</button>
        <button onClick={this.dectement}>- 100$</button>
        <button onClick={this.reset}>reset</button>
        <h5>Money earned: {this.state.count}$</h5>
        <br />
        <br />
        <h1>Add money</h1>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleClick}> Add money</button>
        <h5>Money earned:{this.state.submit}</h5>
      </>
    );
  }
}
