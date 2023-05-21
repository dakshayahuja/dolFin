import React, { useContext } from "react";
import AppBar from "../Navbar";
import Footer from "../Footer";
import CardHolder from "../UI/CardHolder";
import TableContainer from "../UI/TableContainer";
import { Row, Col, Container } from "react-bootstrap";
import NewsContainer from "../UI/NewsContainer";
import { PriceDataContext } from "../PriceDataProvider";

export default function Stocks() {
  const data = useContext(PriceDataContext);
  const slicedData = data.slice(0, 4);
  return (
    <>
      <AppBar />
      <CardHolder data={slicedData} title="Major Indices" />
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          <Col xs="auto">
            <TableContainer />
          </Col>
          <Col xs={5}>
            <NewsContainer />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
