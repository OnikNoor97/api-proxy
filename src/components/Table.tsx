import { Container, Footer, Main, Title } from "./styles";

import Head from "next/head";
import React from "react";

export default function Table(): JSX.Element {
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

      {/* <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table> */}

      <Footer>OTAL &copy; 2021</Footer>
    </Container>
  );
}
