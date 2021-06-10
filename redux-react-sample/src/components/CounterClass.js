import classes from "./Counter.module.css";
import { Component } from "react";
import { connect } from "react-redux";

class CounterClass extends Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Class Counter</h1>
        <div className={classes.value}>-- {this.props.counter} --</div>
        <div>
          <button onClick={this.handleIncrement.bind(this)}>Increment</button>
          <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "Increment" }),
    decrement: () => dispatch({ type: "Decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
