import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GameLogic from "../components/gamelogic"

const GamePage = () => (
  <Layout>
    <SEO title="Party - Gestaponline" />
    <GameLogic/>
  </Layout>
)

export default GamePage