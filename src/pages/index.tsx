import * as React from "react";
import "./defaults.css";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
// components
import Header from "../components/Header";
import ChangeUpdate from "../components/ChangeUpdate";
import PageWrapper from "../components/PageWrapper";
import FullWidthHeader from "../components/FullWidthHeader";
interface DataProps {
  allMarkdownRemark: any;
}
interface IndexPageProps extends PageProps {
  data: DataProps;
}

const IndexPageBlurb = styled.div`
  margin: 0 auto;
  grid-gap: 10px;
  padding: 10px;
  background: white;
  z-index: 1000;
  position: relative;
  height: -webkit-fill-available;
  min-height: 100vh;
  background: linear-gradient(
      168deg,
      rgb(255, 255, 255) 33%,
      rgb(224, 236, 245)
    )
    50% center no-repeat fixed;
  width: 100%;
`;

const PageContainer = styled.div`
  max-width: 900px;
  margin: -50px auto 0 auto;
  background: white;
  box-shadow: 0 0 8px 2px rgb(100 100 100 / 25%);
  border-radius: 10px;
  padding: 25px;
`;

const IframeContainer = styled.div`
  border: 0;
  margin-top: 100px;
  iframe {
    border: none;
    width: 100%;
    height: -webkit-fill-available;
    min-height: 100vh;
  }
`;

const API = styled.li`
  &:hover {
    cursor: pointer;
    color: #34bebd;
  }
`;

const IndexPage: React.FC<IndexPageProps> = (props) => {
  const [view, setView] = React.useState<
    "HOME" | "AGENT" | "REPORT" | "SANDBOX"
  >("HOME");

  return (
    <PageWrapper>
      <Header view={view} setView={setView} />
      {view === "HOME" && (
        <>
          <FullWidthHeader title="GraphQL docs." subtitle=""></FullWidthHeader>
          <IndexPageBlurb>
            <PageContainer>
              <h1>Hey👋</h1>
              <h2 style={{ textAlign: "right" }}>
                Welcome to the Vouch GraphQL Documentation{" "}
              </h2>
              <hr
                style={{
                  borderBottom: "2px solid #f2f2f2",
                }}
              />
              <h4>
                Get started by checking out the docs for the following APIs
              </h4>
              <ul>
                <API onClick={() => setView("AGENT")}>Agent GraphQL</API>
                <API onClick={() => setView("REPORT")}>Reports GraphQL</API>
              </ul>
            </PageContainer>
          </IndexPageBlurb>
        </>
      )}
      {view === "AGENT" && (
        <IframeContainer>
          <h1>agent</h1>
          <iframe src={`/agent/schema/index.html`}></iframe>
        </IframeContainer>
      )}
      {view === "REPORT" && (
        <IframeContainer>
          <h1>agent</h1>
          <iframe src={`/reports/schema/index.html`}></iframe>
        </IframeContainer>
      )}
    </PageWrapper>
  );
};

export default IndexPage;
