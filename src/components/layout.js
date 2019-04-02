/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import style from 'styled-components'

import MainWrapper from '../components/wrapers/MainWrapper'
import Header from "./header"
import "./layout.css"

const WrapStyles = style.div`
margin: '0 auto';
maxWidth: 960;
padding: '0px 1.0875rem 1.45rem';
paddingTop: 0;`

const Layout = ({ arr }) => {
  if (arr) {
    return (
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        <Header />
        <WrapStyles>
          <MainWrapper arr={arr} />
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </WrapStyles>
      </div>
    )
  } else {
    return (
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        <Header />
        <WrapStyles>
          <main>main</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </WrapStyles>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
