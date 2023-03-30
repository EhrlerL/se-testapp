import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Nav justify variant="tabs" defaultActiveKey="1">
            <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="option-2">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Header;