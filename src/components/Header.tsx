import React from "react";
import styled from "styled-components";

const HeadContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
  background: white;
  padding: 25px;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  z-index: 1000000;

  img:hover {
    cursor: pointer;
  }
`;

interface IButton {
  disabled?: boolean;
  alternate?: boolean;
  alternateInverse?: boolean;
}

export const Button = styled.button<IButton>`
  background-color: #34bebd;
  margin: 10px;
  padding: 20px 0;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #34bebd;
  width: 150px;
  height: 60px;
  letter-spacing: 0.23px;
  color: white;
  font: bold 15px Lato, sans-serif;
  outline: none;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavItem = styled.li<{ active: boolean }>`
  list-style: none;
  margin: 0 15px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  a {
    color: #082842;
    text-decoration: none;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #34bebd;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
`;

const TryNow = styled.div`
  text-align: right;
`;

function Header({ view, setView }) {
  return (
    <HeadContainer>
      <img src="/vouchlogo.svg" onClick={() => setView("HOME")} />
      <NavBar>
        <NavItem active onClick={() => setView("AGENT")}>
          <a>agent docs</a>
        </NavItem>
        <NavItem active onClick={() => setView("REPORT")}>
          <a>report docs</a>
        </NavItem>
        <NavItem active></NavItem>
      </NavBar>
      {(view === "AGENT" || view === "REPORT") && (
        <>
          <div></div>
          <TryNow>
            <Button
              onClick={() =>
                window.open(
                  `https://api.vouch.co.uk/graphql-sandbox/${
                    view === "AGENT" ? "agent" : "reports"
                  }/try`,
                  "_blank"
                )
              }
            >
              Try now
            </Button>
          </TryNow>
        </>
      )}
    </HeadContainer>
  );
}

export default Header;
