import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

function Home() {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Hello there</Popover.Header>
            <Popover.Body>
                This is a so-called Popover. It is basically a tooltip on steroides.
            </Popover.Body>
        </Popover>
    );
    
    return (
        <Card style={{width: '20rem'}}>
            <Card.Header>
                <Card.Title className="text-center">Welcome</Card.Title>
                <Card.Subtitle className="text-center">to the site</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    This sample site is based on React-Bootstrap. It contains some of the most Bootstrap components while also showing the basic idea of component-based development with React.
                </Card.Text>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <Button variant="primary">Do something</Button>
                </OverlayTrigger>
            </Card.Body>

        </Card>
    );
}

export default Home;