import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Card
} from "react-bootstrap";

import { Link } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";
import { API } from "../config/API";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "15%" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <Link to={`/${rowContent}`}>
                    {rowContent}
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      );
    },
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "symbol",
    text: "Symbol",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "rank",
    text: "Rank",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "type",
    text: "Type",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "is_active",
    text: "Active",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <Link to="#">
                  <Button variant="danger">
                    Delete
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      );
    },
  },
];


const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = () => {

  const [dataCoin, setDataCoin] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await API.get("/v1/coins");
        setDataCoin(response.data)
      } catch (error) {
        console.log(error);
      }
    };
   getData();
  }, []);


  console.log("DataCoin :", dataCoin);

  const options = {
    paginationSize: 9,
    pageStartIndex: 1,
    firstPageText: false,
    prePageText: "<",
    nextPageText: ">",
    lastPageText: false,
    showTotal: false,
    paginationTotalRenderer: false,
    disablePageTitle: true,
    sizePerPageList: false,
    paginationPosition: 'top'
  };

  const handleClick = () => {
    console.log('masuk')
  }

  return (
    <div>
    <Container>
      <Card className="card-table pb-5 px-5 mb-5">
        <p className="table-title">
          Coint List
        </p>
        {dataCoin ? (
          <ToolkitProvider
            keyField="id"
            data={dataCoin}
            columns={columns}
            defaultSorted={defaultSorted}
            search={ {
              srText: 'search something here'
            } }
          >
            {(props) => (
              <div>
                <Row style={{ marginBottom: 20 }}>
                  <Col md={2}>
                  <Form.Select aria-label="Select">
                    <option>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  </Col>
                  <Col md={2}>
                    <SearchBar
                      {...props.searchProps}
                      placeholder="Search ..."
                      srText=''
                    />
                  </Col>
                  <Col>
                    {/* <button className="btn btn-primary" onClick={ handleClick }>Search</button> */}
                  </Col>
                </Row>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory(options)}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <h4 style={{ textAlign : 'center'}}> Data Not Found</h4>
        )}
      </Card>
    </Container>
    </div>
  )
}

export default TableComponent;