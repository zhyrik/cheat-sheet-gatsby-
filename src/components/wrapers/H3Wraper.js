/**
 * h3 component wrapper
 */
import React from 'react'
import style from 'styled-components'

const H2Styled = style.h3`
  color: #57DAFB;
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 -20px 25px;
`

export default ({ children }) => <H2Styled>{ children }</H2Styled>