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

// 1. When we initialize with Reducer function, the reducer function will be executed for the first time 
const store = redux.createStore(counterReducer);

// 3. if you read the state here, it will return { counter: 1 }. 
// As already the reducer function was executed it will have { counter: 1 } 
//console.log(store.getState()); 


// 4. Subscriber function 
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// 5. Subscribe to the store, on any change the subscribed function will be triggered 
store.subscribe(counterSubscriber);


// 6. Dispath an action to the Reducer to handle. 
// This will trigger the Reducer Function, the reducer function will chagne the store, and then the subscriber will be executed 
// The subscriber will have { counter : 2 } 
// How, initially the counter was 0, on createStore the reducer function will run once and it will increment it to 1 
// On dispatch it will increment the coutner to 2 
store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "DECREMENT" });


// node redux-demo.js