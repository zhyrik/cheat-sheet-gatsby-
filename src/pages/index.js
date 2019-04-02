import React from "react"
import style, { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Arial';
    color: white;
    background: #1E1E1E;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

// const StyledWrapper = style.div`
//   font-size: 45px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: red;
//   height: 100vh;
//   background: aqua;
// `

// const H1 = style.h1`
//   font-size: ${({ isBig }) => isBig ? '2em' : '1em'}
// `
// const BlueH1 = style(H1)`
//   color: pink;
// `
// const LinkStyle = style(Link)`
//   background: pink;
//   font-size: 25px;
// `

const IndexPage = () => (
  <Layout>
    <GlobalStyle/>
    {/* <StyledWrapper>
      <H1 isBig>hi gatsby</H1>
      <BlueH1>hi gatsby</BlueH1>
      <LinkStyle>My link</LinkStyle>
    </StyledWrapper> */}
  </Layout>
)

export default IndexPage
