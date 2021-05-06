import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  subtitle: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  display: grid;
  background: #082842;
  color: white;
  margin-top: 140px;
  padding: 10px;

  div {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    display: grid;
  }

  h1 {
    font-size: 4rem;
    font-family: Montserrat, sans-serif;
    line-height: 4rem;
    position: relative;
    z-index: 10000;
  }

  h1 > span {
    color: #34bebd;
  }

  h3 {
    justify-self: flex-end;
    align-self: flex-end;
    font-family: "Lato", Helvetica, sans-serif;
  }
`;

const GraphQL = styled.img`
  position: absolute;
  max-width: 500px;
  right: 57px;
  transform: rotate(15deg);
`;

export default function FullWidthHeader({ title, subtitle }: Props) {
  return (
    <Container>
      <div>
        <h1>
          <span>Vouch </span>
          {title}
        </h1>
        <h3>{subtitle}</h3>
        <GraphQL src="/graphql.png" alt="" />
      </div>
    </Container>
  );
}
