
export const setupFunc = `import Jotto from './Jotto'
const defaultProps = { seccess: false }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Jotto {...setupProps} />)
}`
export const findByTestAttr = `test
|--testUtils.js

export const findByTestAttr = (wrapper, val) => wrapper.find(\`[data-test="\${'val'}"]\`)`
export  const test1 = `test('rennder without error', () => {
  const wrapper = setup({ success: false })
  const jottoComponent = findByTestAttr(wrapper, 'jotto-component')
  expect(jottoComponent.length).toBe(1)
})`
export  const test2 =`test('renders no test when success prop is folse', () => {
  const wrapper = setup({ success: false })
  const jottoComponent = findByTestAttr(wrapper, 'jotto-component')
  expect(jottoComponent.text()).toBe('')
})`
export const test3 =`test('renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true })
  const jottoComponent = findByTestAttr(wrapper, 'jotto-component')
  expect(jottoComponent.text()).not.toBe(0)
})`
export const test4 =`import checkPropTypes from 'check-prop-types'

export const checkProps = (componet, conformingProps) => {
  const propError = checkPropTypes(
    componet.propTypes,
    conformingProps,
    'prop',
    componet.name)
  expect(propError).toBeUndefined()
}

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Jotto, expectedProps)
})`