import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

import Home from './Home';

function Header() {
    return (
        <Row>
            <h2 className="ms-2 me-2">SE: React App</h2>
            <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
                <h2>SE: React App</h2>
                <Tab eventKey="home" title="Home">
                    <Home />
                </Tab>
                <Tab eventKey="end" title="End">
                </Tab>
                <Tab eventKey="disabled" title="Disabled" disabled>
                </Tab>
            </Tabs>
        </Row>
        
    );
}

export default Header;