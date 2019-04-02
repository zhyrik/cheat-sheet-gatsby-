export const arr = [
  {
    language: "node",
    title: 'instal',

code: `npm install redux
npm install react-redux

npm install redux-thunk`
  },{
    language: "javascript",
    title: 'structure',

code: `|--store
  |--actions
    |--actions.js
    |--actionTypes.js
  |--redcers
    |--reducer1.js
    |--reducer1.js
  |--rootReducer.js
  |--store.js

|--App.js`
  },{
    language: 'javascript',
    title: 'proivider',

code: `import { Provider } from 'react-redux';
import { store } from './store/store'

const app = (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(app , document.getElementById('root'));`
  },{
    language: 'javascript',
    title: 'store, middleware, thunk',

code: `import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import reduxThunk from 'redux-thunk'

// own middleware
const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, reduxThunk)
  )`
  },{
    language: 'javascript',
    title: 'Root reducer',

code: `import { combineReducers } from 'redux'

import reducer1 from './reducers/reducer1'
import reducer2 from './reducers/reducer2'

export default combineReducers({
	reducer1,
	reducer2
})`
  },{
    language: 'javascript',
    title: 'Reducer',

code: `import { ADD, SUB, ADD_NUMBER } from '../actiions/actionTypes'

const initialState = {
  counter: 100
}
export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return {
        counter: state.counter + 1
      }
    case SUB:
      return {
        counter: state.counter - 1
      }
    case ADD_NUMBER:
      return {
        counter: state.counter + action.payload
      }
    default: return state
  }
}`
  },{
    language: 'javascript',
    title: 'Action types',

code: `export const ADD = 'ADD'
export const SUB = 'SUB'
export const ADD_NUMBER = 'ADD_NUMBER'`
  },{
    language: 'javascript',
    title: 'Actions',

code: `import { ADD, SUB, ADD_NUMBER } from './actionTypes'

export function add() {
	return {
		type: ADD
	}
}
// with param
export function addNumber(number) {
	return {
		type: ADD_NUMBER,
		payload: number
	}
}
// async with thank
export function thankChangeAction(number) {
	return (dispatch) => {
		setTimeout(() => {dispatch(addNumber(number))}, 5000)
	}
}`
  },{
    language: 'jsx',
    title: 'In component',

code: `import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add, thankChangeAction } from './store/actiions/actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter: { this.props.counter }</h1>
          <button onClick={ this.props.onAdd }>add</button>
          <button onClick={ this.props.onSub }>sub</button>

          <button onClick={ this.props.changeNumber.bind(this, 15) }>add 15</button>
          <button onClick={ () => this.props.changeNumber(-15) }>sub 15</button>

          <button onClick={ this.props.thankChange.bind(this, 150) }>add thank 150</button>
        </header>
      </div>
    );
  }
}

function mapStateoProps(state) {
  return {
    counter: state.counter1.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    // without actions,
    onSub: () => dispatch({ type: 'SUB' }),
    changeNumber: number => dispatch({ type: 'ADD_NUMBER', payload: number }),
    // thank,
    thankChange: number => dispatch(thankChangeAction(number))
  }
}
export default connect(mapStateoProps, mapDispatchToProps)(App);`
  }
]