import AppBar from "../Navbar";
import Footer from "../Footer";
import React, { useContext } from "react";
import CardHolder from "../UI/CardHolder";
import NewsContainer from "../UI/NewsContainer";
import TableContainer from "../UI/TableContainer";
import { Row, Col, Container } from "react-bootstrap";
import { PriceDataContext } from "../PriceDataProvider";

export default function Stocks() {
  const data = useContext(PriceDataContext);
  const slicedData = data ? data.slice(0, 4) : [];
  return (
    <>
      <AppBar />
      <CardHolder data={slicedData} title="Major Indices" />
      <Container fluid className="mt-5">
        <Row className="justify-content-center ps-3">
          <Col xs="auto">
            <TableContainer />
          </Col>
          <Col xs={6} className="px-3">
            <NewsContainer />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}