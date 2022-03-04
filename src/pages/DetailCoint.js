import React, { useState, useEffect } from 'react';
import { API } from "../config/API";
import { useParams } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";

export const DetailCoint = () => {
  let { id } = useParams();
  console.log('id :', id)

  const [dataCoinId, setDataCoinId] = useState([])
  
  useEffect(() => {
    const getData = async (id) => {
      try {
        const response = await API.get(`/v1/coins/${id}`);
        setDataCoinId(response.data)
      } catch (error) {
        console.log(error);
      }
    };
   getData(id);
  }, []);
  console.log('dataCoinId :', dataCoinId.is_active)

  return (
    <div>
      <Container>
        <p className="head-title">
           Coint Detail
        </p>
        <Card className="card-table pb-5 px-5 mb-5">
          <p className="table-title">
             Coint Detail
          </p>
          <Row className="p-1">
            <Col md={2}> 
              <p className="text-property">
                ID
              </p>
            </Col>
            <Col xs>
              <p className="text-value">
                {dataCoinId.id}
              </p>
            </Col>
          </Row>
          <Row className="p-1">
            <Col md={2}>
              <p className="text-property">
                Name
              </p>
            </Col>
            <Col xs>
              <p className="text-value">
                {dataCoinId.name}
              </p>
            </Col>
          </Row>
          <Row className="p-1">
            <Col md={2}>
              <p className="text-property">
                Symbol
              </p>
            </Col>
            <Col xs>
              <p className="text-value">
                {dataCoinId.symbol}
              </p>
            </Col>
          </Row>
          <Row className="p-1">
            <Col md={2}>
              <p className="text-property">
                Type
              </p>
            </Col>
            <Col xs>
              <p className="text-value-capitalize">
                {dataCoinId.type}
              </p>
            </Col>
          </Row>
          <Row className="p-1">
            <Col md={2}>
              <p className="text-property">
                Active
              </p>
            </Col>
            <Col xs>
              <p className="text-value">
                {dataCoinId.is_active === true ? "True" : "False"}
              </p>
            </Col>
          </Row>
          <Row className="p-1">
            <Col md={2}>
              <p className="text-property">
                Is New
              </p>
            </Col>
            <Col xs>
              <p className="text-value">
                {dataCoinId.is_new === true ? "True" : "False"}
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}
