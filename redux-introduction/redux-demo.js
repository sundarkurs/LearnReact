const redux = require("redux");

// 2. As it runs when createStore initialize, the previous state will be undefined.
// Hence it has to be defined with default value, otherwise it will give undefined error on accessing any state property
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

//console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "DECREMENT" });


// node redux-demo.js