import React from "react";
import styled from "styled-components";
import Contents from "../components/Contents";

const MOBILE_BREAK = 700;

interface Props {
  index: number;
  post: IPost;
  contentItems: any[];
  refs: any[];
}
interface IPostMeta {
  date: string;
  title: string;
}

interface IPost {
  excerpt: string;
  html: string;
  frontmatter: IPostMeta;
}

/* 
  CSS for all the dynamic content which is pulled in from the .md file
*/
const ChangeBlurbContainer = styled.div`
  padding: 5px;
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-transform: capitalize;
    line-height: 100%;
  }
`;

const HeadingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
`;

const AuthorContainer = styled.div``;

const PostTitle = styled.h1<{ mobile?: boolean }>`
  font-size: 2.8rem;
  line-height: 3rem;
  @media (min-width: 500px) {
    display: ${(props) => (props.mobile ? "none" : "")};
  }
`;

const Nav = styled.div`
  div {
    position: sticky;
    top: 180px;
  }

  @media (max-width: ${MOBILE_BREAK}px) {
    display: none;
  }
`;

const AvatarContainer = styled.div`
  background: white;
  width: fit-content;
  margin: 0 auto;
  border-radius: 100%;
  display: grid;
  place-items: center;
  padding: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  img {
    max-width: 100px;
    min-width: 35px;
    height: auto;
  }
`;

const ChangeContainer = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 250px 1fr;

  @media (max-width: ${MOBILE_BREAK}px) {
    grid-template-columns: 1fr;
  }
`;

const ChangeUpdate = React.forwardRef(
  ({ post, contentItems, refs, index }: Props, ref) => {
    if (!contentItems || !post) {
      return <div>Loading...</div>;
    }
    return (
      <ChangeContainer ref={ref}>
        <Nav>
          <div>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <Contents
              title={post.frontmatter.title}
              contentItems={contentItems}
              refs={refs}
            />
          </div>
        </Nav>
        <div>
          <HeadingContainer>
            <div>
              <PostTitle mobile>{post.frontmatter.title}</PostTitle>
              <div className="side-by-side-flex-start">
                <img
                  src="/author.svg"
                  style={{
                    maxWidth: "18px",
                    marginRight: "10px",
                  }}
                />
                <h4
                  style={{
                    margin: "2px",
                  }}
                >
                  <strong>Vouch Dev Team</strong>
                </h4>
              </div>
              <div className="side-by-side-flex-start">
                <img
                  src="/calendar.svg"
                  style={{
                    maxWidth: "18px",
                    marginRight: "10px",
                    marginBottom: "2px",
                  }}
                />
                <h4
                  style={{
                    margin: "2px",
                  }}
                >
                  <strong>{post.frontmatter.date}</strong>
                </h4>
              </div>
            </div>
            <AuthorContainer>
              <AvatarContainer>
                <img src="/vouch-house.svg" />
              </AvatarContainer>
            </AuthorContainer>
          </HeadingContainer>
          <ChangeBlurbContainer
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></ChangeBlurbContainer>
        </div>
      </ChangeContainer>
    );
  }
);

export default ChangeUpdate;
