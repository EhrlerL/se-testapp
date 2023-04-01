import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image'

import Start from './Start';
import Footer from './Footer';
import About from './About';

function TabMenu(props) {
    return (
        <Row>
            <h2 className="ms-2 mt-1 d-flex align-items-center"><Image src={require("../images/React-Bootstrap Icon.png")} style={{height: "2rem", width: "auto"}} className="me-2"/>SE: React App</h2>
            <Tabs defaultActiveKey="start" id="fill-tab-example" className="mb-3" fill>
                <h2>SE: React App</h2>
                <Tab eventKey="start" title="Start">
                    <Start />
                </Tab>
                <Tab eventKey="about" title="About React">
                    <About />
                </Tab>
                <Tab eventKey="dev" title="Development">
                    
                </Tab>
                <Tab eventKey="code" title="Code Examples">

                </Tab>
            </Tabs>
        </Row>
        
    );
}

export default TabMenu;