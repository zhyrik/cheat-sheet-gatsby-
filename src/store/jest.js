
export const arr = [
  {
    language: "node",
    title: 'start',

code: `npm install --save-dev jest babel-jest

/* Add to package.json */
"scripts": {
  "test": "jest"
}
# Run your tests
npm test -- --watch`
  },{
    language: 'javascript',
    title: 'enzyme',
code: `import React from 'react'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


// install Enzyme
Enzyme.configure({ adapter: new Adapter() })`
  },{
    language: 'javascript',
    title: 'test 2+2',
code: `// simple test
test('first test', () => {
  expect(2 + 2).toBe(4);
})`
  },{
    language: 'javascript',
    title: 'describe',
code: `describe('My work', () => {
  test('works', () => {
    expect(2).toEqual(2)
  })
})`
  },{
    language: 'javascript',
    title: 'with enzyme',
code: `test('first with enzume', () => {
  //render App (without Error!)
  const wrapper = shallow(<App></App>);
  //DOM in terminal
  console.log(wrapper.debug());
  //wrapper not '' || null || undefinet
  expect(wrapper).toBeTruthy()
})`
  },{
    language: 'javascript',
    title: 'setup',
code: `/** 
* 17
* Facroty function to create s ShallowWrapper for the App component.l
* @function setup
* @param {object} props - Component props specific to this setup.
* @param {object} state - inimial state for setup.
* @returns {shallowWrapper}
*/
const setup = (props={}, state=null) => {
// 19
const wrapper = shallow(<App {...props} />)
if (state) wrapper.setState(state)
return wrapper
}`
  },{
    language: 'javascript',
    title: 'findByTestAttr',
code: `/**
* Return ShallowWrapper containing node(s) with the given data-test
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to seacrch
* @param {string} val - Value of data-test attribute for search.
* @returns {ShallowWrapper}
*/
const findByTestAttr = (wraper, val) => {
return wraper.find(\`[data-test="$\{val}"]\`)
}`
  },{
    language: 'javascript',
    title: 'find data-test atr',
code: `
// 1) ловимо <App /> 2) ловимо [data-test="hello"] 3) к-сть = 1
test('renders without error', () => {
  const wraper = setup();
  const appComponent = findByTestAttr(wraper, 'hello');
  expect(appComponent.length).toBe(1);
});`
  },{
    language: 'javascript',
    title: 'state === ?',
code: `// провіряєм чи каунтер = 0
test('counter start at 0', () => {
  const wrapper = setup();
  const initialState = wrapper.state('counter');
  expect(initialState).toBe(0)
})`
  },{
    language: 'javascript',
    title: 'button',
code: `//провірка роботи кнопки
test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // знаходимо кнопку, стимулюємо клік, обновляємо
  const button = findByTestAttr(wrapper, 'my');
  button.simulate('click');
  wrapper.update();

  //знаходимо h1, провіряємо чи є каунтер + 1
  const counterDisplay = findByTestAttr(wrapper, 'test');
  expect(counterDisplay.text()).toContain(counter + 1)
})`
  },{
    language: 'javascript',
    title: 'setup width defaultProps',
code: `const defaultProps = { seccess: false }

/**
 * factorry function to create shallowWrapper for the Jotto 
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {shallowWrapper}
 */
const setup = (props = {}) => {
  // 31 for default props
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Jotto {...setupProps} />)
}`
  },{
    language: 'javascript',
    title: 'test with props',
code: `test('renders no test when success prop is folse', () => {
  const wrapper = setup({ success: false })
  const jottoComponent = findByTestAttr(wrapper, 'jotto-component')
  expect(jottoComponent.text()).toBe('')
})
test('renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true })
  const jottoComponent = findByTestAttr(wrapper, 'jotto-component')
  expect(jottoComponent.text()).not.toBe(0)
})`
  },{
    language: 'javascript',
    title: 'checkProps',
code: `import checkPropTypes from 'check-prop-types'
/**
* 29 prop-types
* Check component prop-types for to be undefined.
* @function 
* @param {shallowWrapper} component
* @param {string} conformingProps
*/
export const checkProps = (componet, conformingProps) => {
 const propError = checkPropTypes(
   componet.propTypes,
   conformingProps,
   'prop',
   componet.name)
 expect(propError).toBeUndefined()
}`
  },{
    language: 'javascript',
    title: 'test for propTypes',
code: `test('does not throw warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Jotto, expectedProps)
})`
  },{
    language: 'javascript',
    title: '--------------------------------------------------------------------------------------------------',
code: ``
  },{
    language: 'javascript',
    title: 'beforeEach',
code: `describe('if there are no words guessed', () => {
	// 39 beforeEach put wrapper in evry test()
	let wrapper
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] })
	})
	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'componet-gues-word')
		expect(component.length).toBe(1)
	})
	test('renders instructions to guess aword', () => {
		const instrunctions = findByTestAttr(wrapper, 'guess-instruction')
		expect(instrunctions.text().length).not.toBe(0)
	})
})`
  },{
    language: 'javascript',
    title: 'beforeEach 2',
code: `describe('if there are words guessed', () => {
	let wrapper
	let guessedWords = [
		{ guessedWords: 'train', letterMaitchCount: 3 },
		{ guessedWords: 'agile', letterMaitchCount: 1 },
		{ guessedWords: 'party', letterMaitchCount: 5 }
	]
	beforeEach(() => {
		wrapper = setup({ guessedWords })
	})

	test('correct number of guessed words', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
		expect(guessedWordNodes.length).toBe(guessedWords.length)
	})
})`
  },{
    language: 'javascript',
    title: '-------------------------------------------------------------------------------------------------------',
code: ``
  },{
    language: 'javascript',
    title: 'actions',
code: `import { correctGuess, actionTypes } from './'

describe('correctGuess', () => {
	// 48 test actions
	test('returns an action with type \`CORRECT_GUESS\`', () => {
		const action = correctGuess()
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
	})
})`
  },{
    language: 'javascript',
    title: 'reducer',
code: `import { actionTypes } from '../actions/index'
import successReducer from './successReducer'

// 49  50 test reducer
test('returns default initial atate of \`false\` when no scton is passed', () => {
	// console.log(successReducer)
	const newState = successReducer(undefined, {})
	expect(newState).toBe(false)
})
test('returns state of true upon receiving an action of type \`CORRECT_GUESS\`', () => {
	const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
	expect(newState).toBe(true)
})`
  }
]