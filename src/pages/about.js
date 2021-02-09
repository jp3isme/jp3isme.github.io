import React from "react"
import Bio from "../components/HomePageComponents/Bio"
import Button from "../components/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MediaCard from "../components/Cards/MediaCard"
import styled from "styled-components"

const FlexDiv = styled.div`
  padding: 0;
  margin: 0;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 992px) {
    max-height: 1300px;
  }
  @media (max-width: 576px) {
    max-height: none;
  }
`

export default function AboutPage(props) {
  const goodreads = {
    img: `goodreadsbooks1.png`,
    title: "My 2020 Year in Books",
    link: "https://www.goodreads.com/user/year_in_books/2020/64860063",
    description:
      'My Goodreads "Year in Books" report for the first year with my book club',
  }
  const spotify = {
    img: "static.jpg",
    title: '"comfortably numb" on Spotify',
    link:
      "https://open.spotify.com/playlist/5sNiYuJg7ePavu0y5ZXVMM?si=i4eO8auRT1KpW4Hl607NqA",
    description:
      "My main playlist on spotify. 2600+ songs, 176+ hours, a little bit of everything",
  }
  const topSongs = {
    img: null,
    title: "My top songs for 2020 on Spotify",
    link:
      "https://open.spotify.com/playlist/37i9dQZF1EM9RSvom6wwIb?si=DivWmCXvQzCg57ZE-kK3xw",
    description:
      "My top 100 most played songs for 2020. Playlist autogenerated by Spotify",
  }

  return (
    <Layout>
      <SEO title="About Me" />
      <div className="container">
        <Bio location={props.location} />
        <FlexDiv>
          <MediaCard data={goodreads} key={"goodreads"} />
          <MediaCard data={spotify} key={"spotify"} />
          <MediaCard data={topSongs} key={"topSongs"} />
        </FlexDiv>
        <span style={{ width: "100%", display: "inline-block" }}>
          <Button to={"/"}>Go Home</Button>
        </span>
      </div>
    </Layout>
  )
}
