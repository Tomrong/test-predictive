import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const ProductStyle = styled.div`
  width: 33.33%;
  ${media.xs`
  width: 100%;
    `}
  float: left;
  img {
    width: 100%;
  }
  .item-box {
    padding: 20px 40px;
    ${media.xs`
    padding: 10px;
      `}
  }
  .item-space {
    background: white;
    padding: 20px;
  }
  .product-title {
    margin: 0;
    color: #162e46;
    font-size: 2rem;
    line-height: 1.4;
    padding-top: 10px;
  }
  .product-desc {
    margin: 0 0 30px 0;
    font-size: 1.2rem;
    line-height: 1.6;
  }
  .product-price {
    margin: 0 0 30px 0;
    font-size: 1.2rem;
    line-height: 1.6;
    font-weight: bold;
  }
  .c-facility ul {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    font-size: 0;
    li {
      width: 50%;
      position: relative;
      display: inline-block;
      margin-bottom: 10px;
      font-size: 0.8rem;
      vertical-align: top;
    }
    li > img {
      width: 35px;
      height: 35px;
    }
    li > span {
      display: inline-block;
      color: #162e46;
      width: 65%;
      vertical-align: top;
      padding-top: 5px;
    }
  }
  .btn-more {
    position: relative;
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 35px;
    color: #000;
    margin-left: 0;
    padding: 12px;
    border: 3px solid #003168;
    margin-bottom: 10px;
  }
`;
