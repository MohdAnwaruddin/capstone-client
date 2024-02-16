"use client"

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavDropdownExample() {
  const handleSelect = (eventKey: any) => alert(`selected ${eventKey}`);

  return (
<div>

    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" href="#/home">
          Politics
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Item">
          climate
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" href="#/login">
         Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="5" href="#/register">
         Register
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="More" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Entertainment</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Science</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">About CBC news</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Health</NavDropdown.Item>
      </NavDropdown>
    </Nav>
<br></br>
    </div>
  );
}

export default NavDropdownExample;