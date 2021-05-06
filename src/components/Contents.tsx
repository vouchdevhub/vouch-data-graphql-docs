import React from "react";
import styled from "styled-components";

interface Props {
  contentItems: any[];
  refs: any[]; // match up to the contentItems
  title: string;
}

const ContentsContainer = styled.div``;

const ContentItem = styled.div<{ hide: boolean }>`
  display: ${(props) => (props.hide ? "none" : "")};
  width: fit-content;

  &:hover {
    cursor: pointer;

    &:after {
      width: 100%;
      left: 0;
    }
  }

  &:after {
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
`;

export default function Contents({ contentItems, refs, title }: Props) {
  console.log(contentItems);
  return (
    <ContentsContainer>
      {contentItems.map(({ node }, index) => (
        <ContentItem
          hide={title === node.frontmatter.title}
          onClick={() => refs[index].current.scrollIntoView()}
        >
          <h4>{node.frontmatter.title}</h4>
        </ContentItem>
      ))}
    </ContentsContainer>
  );
}
