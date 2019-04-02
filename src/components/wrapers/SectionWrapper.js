/**
 * section wrapper
 */
import React from 'react'
import style from 'styled-components'

const SectionStyled = style.section`
  margin: 0 auto;
  flex-grow: 1;
`

export default ({ children }) => <SectionStyled>{ children }</SectionStyled>