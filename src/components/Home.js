import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container style={{ overflowx: 'hidden' }}>
      <Section
        title="Model-S"
        desc="Order Online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY" />
      <Section
        title="Model-Y"
        desc="Order Online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY" />
      <Section
        title="Model-3"
        desc="Order Online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY" />
      <Section
        title="Model-X"
        desc="Order Online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY" />
      <Section
        title="Lowest Cost Solar panels in America"
        desc="Money-back guarantee"
        backgroundImg="solar-roof.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="LEARN MORE" />
      <Section
        title="Accessories"
        desc=""
        backgroundImg="accessories.jpg"
        leftBtnText="SHOP NOW"
      />

    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh`