import React from 'react'
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap"
import TableComponent from '../components/TableComponent'

export const CointList = () => {

  return (
    <>
    <Container>
      <p className="head-title">
        Coint List
      </p>
      <TableComponent />
    </Container>
    </>
  )
}
