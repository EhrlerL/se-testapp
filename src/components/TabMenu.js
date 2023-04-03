import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image'

import Start from './Start';
import About from './About';
import Development from './Development';
import Examples from './Examples';
import End from './End';
import Footer from './Footer';

function TabMenu() {
    return (
        <Row>
            <h2 className="ms-2 mt-1 d-flex align-items-center"><Image src={require("../images/React-Bootstrap Icon.png")} style={{height: "2rem", width: "auto"}} className="me-2"/>SE: React App</h2>

            <Tabs defaultActiveKey="start" id="fill-tab-example" className="mb-3" fill>
                <Tab eventKey="start" title="Start">
                    <Start />
                    <Footer progress="20" />
                </Tab>
                <Tab eventKey="about" title="About React">
                    <About />
                    <Footer progress="40" />
                </Tab>
                <Tab eventKey="dev" title="Development">
                    <Development />
                    <Footer progress="60" />
                </Tab>
                <Tab eventKey="code" title="Examples">
                    <Examples />
                    <Footer progress="80" />
                </Tab>
                <Tab eventKey="end" title="End">
                    <End />
                    <Footer progress="100" />
                </Tab>
            </Tabs>
        </Row>
        
    );
}

export default TabMenu;