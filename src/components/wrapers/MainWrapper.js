/**
 * Main wrapper
 */

import React from 'react'
import style from 'styled-components'
import Highlight from 'react-highlight.js'

import SEO from '../seo'
import  SectionWrapper from './SectionWrapper'
import  H3 from './H3Wraper'
import '../../utils/Highlight.css'

const MainStyled = style.main`
max-width: 1100px;
margin: 0 auto;
display: flex;
justify-content: center;
align-content: center;
flex-wrap: wrap;
padding: 20px 0;`

export default ({ arr }) => 
<MainStyled>
  {/* <SEO title="Page two" /> */}
  { 
    arr.map(({ language, title, code }) => <SectionWrapper>
      <H3>{ title }</H3>
      <Highlight language={ language }>{ code }</Highlight>
    </SectionWrapper>)
  }
</MainStyled>