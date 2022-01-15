import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Container.displayName = "Container";

export const Main = styled.div`
  padding: 0;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
Main.displayName = "Main";

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;
Footer.displayName = "Footer";

export const Title = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;
Title.displayName = "Title";
