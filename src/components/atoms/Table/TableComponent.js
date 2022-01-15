import { Container, Footer, Main, Title } from "./styles";

import { Button } from "react-bootstrap";
import Head from "next/head";
import ModalComponent from "./Modal/ModalComponent";
import React from "react";
import Table from "react-bootstrap/Table";

const mockData = [
  {
    id: "1",
    source: "192.168.0.1",
    destination: "192.168.0.2",
    status: "online",
  },
  {
    id: "2",
    source: "192.168.0.3",
    destination: "192.168.0.4",
    status: "disabled",
  },
  {
    id: "32",
    source: "192.168.1.254",
    destination: "192.168.1.9",
    status: "online",
  },
];

export default function TableComponent() {
  return (
    <Container>
      <Head>
        <title>OTAL API Proxy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>OTAL API proxy</Title>
      </Main>

      <div>
        <Table
          responsive="sm"
          width="500"
          style={{ whiteSpace: "nowrap", wordWrap: "break-word" }}
        >
          <thead>
            <tr>
              <th></th>
              <th>Source</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>
          {mockData.map((data, id, source, destination, status, key) => (
            <tbody>
              <tr key={id}>
                <td>{data.id}</td>
                <td>{data.source}</td>
                <td>{data.destination}</td>
                <td>{data.status}</td>
                <Button>Edit</Button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <Footer>OTAL &copy; 2021</Footer>
    </Container>
  );
}
