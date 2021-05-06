import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { vouchLight, vouchDark } from "../common/themes";
const PageWrapperContainer = styled.div`
  position: relative;
  margin-top: 140px;
  min-height: 100%;
  background: linear-gradient(
      168deg,
      rgb(255, 255, 255) 33%,
      rgb(224, 236, 245)
    )
    50% center no-repeat fixed;
  padding: 0px;
  margin: 0px;
  height: auto;
`;

export default function PageWrapper({ children }) {
  return (
    <ThemeProvider theme={vouchLight}>
      <PageWrapperContainer>{children}</PageWrapperContainer>
    </ThemeProvider>
  );
}
