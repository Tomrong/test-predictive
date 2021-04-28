import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const HeaderStyle = styled.div`
  a {
    color: black !important;
  }
  nav {
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.6);
    ${media.xs`
    background-color: unset;
    `}
  }
  .logo {
    background-image: url("https://sansiri-com-frontend.s3.ap-southeast-1.amazonaws.com/assets/img/logo-sansiri-black-th.svg");
    background-repeat: no-repeat;
    width: 120px;
    height: 23px;
    display: block;
    margin: 20px auto;
    ${media.xs`
    position: absolute;
    margin: 20px;
    height: 17px;
    `}
  }
  ${media.xs`
  .navbar-collapse{
    text-align:center;
  }
  .navbar-nav{
    width:340px;
  }
  .navbar-toggler{
    margin-left: 300px;
  }
  `}
`;
