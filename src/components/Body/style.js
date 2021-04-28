import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const BodyStyle = styled.div`
  img {
    width: 100%;
  }
  .main-body {
    margin-top: -55px;
    ${media.xs`
    margin-top: unset;
    `}
  }

  .highlight {
    text-align: center;
    margin: 80px auto;
    ${media.xs`
    margin: 30px auto;
  `}
  }
  .highlight-title {
    p,
    h1 {
      font-size: 2rem;
      margin-bottom: unset;
      ${media.xs`
      font-size: 1.6rem;
    `}
    }
  }
  .highlight-desc {
    font-size: 1.2rem;
    ${media.xs`
    padding: 0px 10px;
  `}
  }

  .product {
    background-color: #f5f5f5;
    display: flow-root;
  }
`;
