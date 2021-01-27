import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Image from "../Image"

const Div = styled.a`
  text-decoration: none;
  color: inherit;
  order: ${props => props.order};
  background-color: ${props => props.theme.foreground};
  padding: 1.5rem;
  min-width: 200px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  max-width: calc(33% - 20px);
  border: 1px solid ${props => props.theme.foregroundBorder};

  @media (max-width: 991px) {
    max-width: calc(50% - 20px);
  }
  @media (max-width: 576px) {
    max-width: calc(100%);
  }

  &:hover {
    cursor: pointer;
  }
`

const Description = styled.div`
  padding: 0 0 0 0;
`

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1rem;
`

const P = styled.p`
  padding: 5px 0;
  margin: 0;
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
`

export default function MeidaCard(props) {
  //const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {}, [props])

  return (
    <Div
      className={"box transition"}
      order={props.order}
      href={
        props.data.public_path
          ? "documents/" + props.data.public_path
          : props.data.link
          ? props.data.link
          : "documents/" + props.data.img
      }
      target={"_blank"}
    >
      {props.data.img == null ? null : (
        <Image
          filename={props.data.img}
          style={{
            height: "auto",
            width: "calc(100% + 3rem)",
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "0.5rem 0.5rem 0 0",
            backgroundColor: `${props => props.bg}`,
            padding: 0,
            margin: "-1.5rem -1.5rem 0.75rem -1.5rem",
          }}
          alt={`Project Image (${props.data.name})`}
        />
      )}
      <Description>
        <H1>{props.data.title != null ? props.data.title : props.data.img}</H1>
        <P>{props.data.description}</P>
      </Description>
    </Div>
  )
}
