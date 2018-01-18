import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { utils } from 'styles'

const StyledFooter = styled.footer`
  flex: 1;
  margin: 10px;
`
const StyledA = styled.a`
  margin: 0 10px;

  &:hover {
    color: ${ props => props.theme.color.primary }
  }

  ${props => utils.media.mobile`
      font-size: 0.8rem;
    `}
`

const StyledSpan = styled.span`
  ${props => utils.media.mobile`
      display: none;
    `}
`

const Footer = ({ text }) => {
  return (
    <StyledFooter>
      <StyledSpan>{ text }</StyledSpan>
      <StyledA href='https://github.com/AlexMin314/React-Redux-Study/tree/master'>
        Alex Min <i className="fab fa-lg fa-github"></i>
      </StyledA>
    </StyledFooter>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
}

export default Footer
