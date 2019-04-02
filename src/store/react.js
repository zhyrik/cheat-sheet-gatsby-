export const arr = [
  {
    language: "node",
    title: 'instal react-app',

code: `create-react-app YOUR_APP_NAME`
  },
  {
    language: "jsx",
    title: 'Stateless component',

code: `import React from 'react'

const YourComponent = ({ example1, example2 }) => (
  <div>
    <h1>properties from parent component:</h1>
    <ul>
      <li>{example1}</li>
      <li>{example2}</li>
    </ul>
  </div>
)

export default YourComponent`
  },
  {
    language: "jsx",
    title: 'class component',

code: `import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.initialList
    }
  }

  render () {
    // destructurization props
    const { name, name2 } = this.props

    return <div className='message-box'>
      Hello {this.props.name}
      Hello {name2}
    </div>
  }
}`
  },
  {
    language: "jsx",
    title: 'Ref class',

code: `class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <input ref={this.textInput}></input>
    );
  }
}`
  },
  {
    language: "jsx",
    title: 'Ref functional',

code: `function CustomTextInput(props) {
  let textInput = null;

  function handleClick() {
    textInput.focus();
  }

  return (
    <input
      type="text"
      ref={(input) => { textInput = input; }} />);
}`
  },
  {
    language: "jsx",
    title: 'Form input',

code: `class MyComponent extends Component {
  render() {
    reutrn (
      <input type="text"
          value={this.state.value}
          onChange={event => this.onChange(event)} ></input>
    )
  }

  onChange (event) {
    this.setState({ value: event.target.value })
  }
}`
  },
  {
    language: "javascript",
    title: 'Higher Order Component',

code: `import React from 'react'
import Loading from '../components/Loading'

const withLoading = WrappedComponent => {
  return (props = {}) => {
    if (props.isLoading) {
      return <Loading></Loading>
    }
    return <WrappedComponent {...props}></WrappedComponent
  }
}

export default withLoading

const MyComponent = ({}) => <div></div>;
const WithLoadingComponent = withLoading(MyComponent)`
  },
  {
    language: "javascript",
    title: 'setState',

code: `// FUNCTION good for state transitions
this.setState((prevState, props) => {
  return {count: prevState.count + props.step};
});

// OBJECT good for static values
this.setState({mykey: 'my new value'});

// CALLBACK
// fires after setState
// prefer componentDidUpdate
this.setState(
  (prevState, props) => ({ count: prevState.count + props.step }),
  () => console.log(this.state.count)
);`
  },
  {
    language: "jsx",
    title: 'React life cicle MOUNTING',

code: `class Hello extends React.Component {
  constructor(props) {
    super(props);
      //
  }

  static getDerivedStateFromProps (props, state) {
    return state
  }

  render () {
    return <div></div>
  }

  componentDidMount() {
    // good for AJAX: fetch, ajax, or subscriptions.

    // invoked once (client-side only).
    // fires before initial 'render'
  }
}`
  },
  {
    language: "jsx",
    title: 'React life cicle UPDATING',

code: `class Hello extends React.Component {
  static getDerivedStateFromProps() {}

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name !== this.props.name
  }

  render() {}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Добавляются ли в список новые элементы?
    // Запоминаем значение прокрутки, чтобы использовать его позже.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Если снимок (snapshot) передан, значит элементы добавлены.
    // Выравниваем прокрутку так, чтобы новые элементы не выталкивали старые.
    // (снимок – значение, переданное из getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }
}`
  },
  {
    language: "jsx",
    title: 'React life cicle ERROR',

code: `class MyComponent extends Component {
  ···
  componentDidCatch (error, info) {
    this.setState({ error })
  }
}`
  },
  {
    language: "jsx",
    title: 'Prop Types',

code: `import PropTypes, { string } from "prop-types";

const Greeting = (props, context) => (
  <div>{context.salutation} {props.name}</div>
);

Greeting.propTypes = { 
  email:      string.isRequired,

  seats:      PropTypes.number,
  callback:   PropTypes.func,
  isClosed:   PropTypes.bool,
  any:        PropTypes.any,
  element:    PropTypes.element,
  node:       PropTypes.node,
};

// array
MyCo.propTypes = {
  list: PropTypes.array,
  ages: PropTypes.arrayOf(PropTypes.number),
  user: PropTypes.object,
  user: PropTypes.objectOf(PropTypes.number),
  message: PropTypes.instanceOf(Message)
}
// obj
MyCo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age:  PropTypes.number
  })
}`
  },
]