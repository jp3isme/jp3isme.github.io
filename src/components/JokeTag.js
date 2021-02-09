import React, { useState } from "react"
import styled from "styled-components"

const S = styled.span`
  text-decoration: none;
  // color: ${props => props.theme.textHighlight};
  // background-color: ${props => props.theme.mutedSecondary};
  border-radius: 0.375rem;
  padding: 1.5px 5px;
  white-space: nowrap;

  &:hover {
    // color: ${props => props.theme.buttonTextHover};
    // background-color: ${props => props.theme.buttonHover};
    cursor: pointer;
  }
`

export default function JokeTag(props) {
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!hovered)
  return (
    <S
      className="transition tag"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {hovered ? props.punchline : props.setup}
    </S>
  )
}
