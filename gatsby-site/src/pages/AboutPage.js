import React from "react"
import Bio from "../components/HomePageComponents/Bio"
import Button from "../components/Button"

export default function AboutPage() {
  return (
    <div className="container">
      <Bio />
      <Button to="/">Go Home</Button>
    </div>
  )
}
