import { PureComponent, Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HeaderStyle } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="main-header">
        <a className="logo" href="https://www.sansiri.com/thai/"></a>

        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#">รู้จักแสนสิริ</Nav.Link>
              <Nav.Link href="#">โครงการ</Nav.Link>
              <Nav.Link href="#">บริการ</Nav.Link>
              <Nav.Link href="#">ผู้ลงทุนสัมพันธ์</Nav.Link>
              <Nav.Link href="#">เพื่อชีวิตที่ยั่งยืน</Nav.Link>
              <Nav.Link href="#">การร่วมทุนทางธุรกิจ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </HeaderStyle>
  );
};
export default Header;
