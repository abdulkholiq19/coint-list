import React from 'react'

import {
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Container>
        <Card className="card-table py-5 px-5 my-5">
          <Card.Title>
            Home
          </Card.Title>
        </Card>
      </Container>
    </div>
  )
}
