import AppBar from "../AppBar";
import Footer from "../Footer";
import React, { useContext } from "react";
import CardHolder from "../UI/CardHolder";
import NewsContainer from "../UI/NewsContainer";
import TableContainer from "../UI/TableContainer";
import { Row, Col, Container } from "react-bootstrap";
import { PriceDataContext } from "../PriceDataProvider";

export default function Stocks() {
  const { data, updateData } = useContext(PriceDataContext);
  const globalIndices = data ? data.slice(0, 4) : [];
  const indianIndices = data ? data.slice(4, 9) : [];
  return (
    <>
      <AppBar />
      <CardHolder data={globalIndices} title="Indian Market Indices" updateData={updateData} showButton="true"/>
      <CardHolder data={indianIndices} title="Global Market Indices" />
      <Container fluid className="mt-5">
        <Row className="justify-content-center ps-3">
          <Col xs={6}>
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
