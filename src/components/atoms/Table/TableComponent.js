import { Container, Footer, Main, Title } from "./styles";

import { Button } from "react-bootstrap";
import Head from "next/head";
import ModalComponent from "./Modal/ModalComponent";
import React from "react";
import Table from "react-bootstrap/Table";

const mockData = [
  {
    id: "1",
  },
];

export default function TableComponent() {
  return (
    <Container>
      <Head>
        <title>API Proxy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to our API proxy, <a href="https://nextjs.org">Onik!</a>
        </Title>
      </Main>

      <div>
        <Table responsive="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>
                <Button>Edit</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>
                <Button>Edit</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>
                <Button>Edit</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer>OTAL &copy; 2021</Footer>
    </Container>
  );
}
