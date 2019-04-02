import { Link } from "gatsby"
import React from "react"
import styles from 'styled-components'

const WrapStyled = styles.div`
background: 'red';
margin: '0 auto';
padding: 10px 25px;`
const linkStyles = {
  color: '#57DAFB',
  textDecoration: 'none',
  paddingRight: '20px',
  fontSize: '20px',
  fontWeight: '300'
}

const Header = () => (
  <WrapStyled>
    <h1 style={{ margin: 0 }}>
      <Link style={linkStyles} to="/">home</Link>
      <Link style={linkStyles} to="/react">react</Link>
      <Link style={linkStyles} to="/redux">redux</Link>
      <Link style={linkStyles} to="/test">test</Link>
      <Link style={linkStyles} to="/jest">jest</Link>
    </h1>
  </WrapStyled>
)

export default Header
function newFunction() {
  return 300;
}

