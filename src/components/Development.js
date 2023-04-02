import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';

function Development() {
    const popoverCRA = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Requirements</Popover.Header>
            <Popover.Body>
                <ListGroup>
                    <ListGroup.Item>IDE (e.g. <strong>VSCode</strong>)</ListGroup.Item>
                    <ListGroup.Item><strong>npm</strong> or <strong>yarn</strong> has to be installed</ListGroup.Item>
                </ListGroup>
            </Popover.Body>
        </Popover>
    );

    const popoverFolders = (
        <Popover id="popover-basic">
            <Popover.Body>
                <Image src={require("../images/folder-structure.png")} rounded />
            </Popover.Body>
        </Popover>
    );

    return(
        <>
        <Row className="my-2"> {/* className="my-2" for top and bottom margin of .5 rem */}
            <h1 className="text-center">Developing a React Frontend</h1>
        </Row>



        <Row className="justify-content-center mx-5 mb-3">


            <CardGroup>
                <Card border="info">
                    <Card.Header className="text-center">
                        <Card.Title as="h3">Getting started</Card.Title>
                        <Card.Subtitle>Create-React-App</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <ListGroup as="ul" variant="flush">
                                <ListGroup.Item>create the app by typing <strong className="code">npm install create-react-app my-app</strong> in the terminal</ListGroup.Item>
                                <ListGroup.Item>navigate to the app directory by typing <strong className="code">cd my-app</strong> in the terminal</ListGroup.Item>
                                <ListGroup.Item>start the app by typing <strong className="code">npm run start</strong> in the terminal</ListGroup.Item>
                                <ListGroup.Item>by default, the app opens on <strong className="code">http://localhost:3000/</strong></ListGroup.Item>
                                <ListGroup.Item><strong>optional:</strong> install React-Bootstrap via <strong className="code">npm install react-bootstrap bootstrap</strong></ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                            
                        {/*Popover on Button-Click*/}
                        <OverlayTrigger trigger="click" placement="right" overlay={popoverCRA}>
                            <Button variant="primary">Requirements</Button>
                        </OverlayTrigger>

                    </Card.Body>
                </Card>


                <Card border="info">
                    <Card.Header className="text-center">
                        <Card.Title as="h3">Project Structure</Card.Title>
                        <Card.Subtitle>Basics</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <ListGroup as="ul" variant="flush">
                                <ListGroup.Item>the main page is <strong className="code">App.js</strong></ListGroup.Item>
                                <ListGroup.Item>all components must directly or indirectly be referenced in <strong className="code">App.js</strong></ListGroup.Item>
                                <ListGroup.Item>in <strong className="code">App.js</strong>, you can <strong className="code">import 'bootstrap/dist/css/bootstrap.min.css';</strong></ListGroup.Item>
                                <ListGroup.Item>alternatively you can edit your own <strong className="code">CSS</strong> or <strong className="code">Sass</strong> stylesheets</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>

                        <OverlayTrigger trigger="click" placement="right" overlay={popoverFolders}>
                            <Button variant="primary">Folder Structure</Button>
                        </OverlayTrigger>

                    </Card.Body>
                </Card>
            </CardGroup>


        </Row>



        <Row className="mx-5 mb-5">
            <h1 className="text-center my-2">Creating and Importing Components</h1>


            <Accordion>
                <Accordion.Item eventKey="0">

                    <Accordion.Header>Creating Components</Accordion.Header>

                    <Accordion.Body>
                        <ListGroup as="ol" variant="flush" numbered>
                            <ListGroup.Item>
                                Create a new JSX file, e.g. <strong className="code">Test.js</strong> in the <strong className="code">src</strong> folder or a sub folder. <br/>
                                <Figure className="ms-3 mt-2">
                                    <Figure.Image alt="creating JSX file Test.js" src={require("../images/screenshot-create-component1.png")} rounded/>
                                    <Figure.Caption>creating JSX file Test.js</Figure.Caption>
                                </Figure>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Add the basic JSX structure. This structure is required for every JSX file. <br/>
                                <Figure className="ms-3 mt-2">
                                    <Figure.Image alt="adding required JSX structure" src={require("../images/screenshot-create-component2.png")} rounded/>
                                    <Figure.Caption>adding required JSX structure</Figure.Caption>
                                </Figure>

                                <ol>
                                    <li>Add your JavaScript code inside the function that is named after your component. Make shure that any variables and functions are declared before the <strong className="code">return</strong> function.</li>
                                    <li>The <strong className="code">return</strong> function contains the JSX code. It is slightly adapted HTML combined with JavaScript. JavaScript code has to be nested using curly brackets.</li>
                                    <li>In JSX, multiple elements on the same level must be wrapped in a single element, like a <strong className="code">div</strong>. A short form of this is just using <strong className="Code">{"<> ... </>"}</strong>.</li>
                                    <li>Finally, your component has to end by <strong className="code">export default Test;</strong>.</li>
                                </ol>

                            <Alert variant="warning" className="mt-2">
                                Note that you cannot use HTML comments. You need to use the JavaScript comment syntax and therefore wrap a comment into curly brackets.
                            </Alert>

                            </ListGroup.Item>

                            <ListGroup.Item>
                                Start adding the actual component code. <br/>
                                <Figure className="ms-3 mt-2">
                                    <Figure.Image alt="custom button component" src={require("../images/screenshot-create-component3.png")} rounded/>
                                    <Figure.Caption>custom button component</Figure.Caption>
                                </Figure>

                                <ul>
                                    <li>In this component, a HTML button is configured as a submit button with some CSS.</li>
                                    <li>The button has the text "Button". This is because the <strong className="code">const variable</strong> has been declared before the return function.</li>
                                    <li>In JSX, HTML Tags must always be closed. Otherwise, this will cause an error.</li>
                                </ul>

                                <Alert variant="warning" className="mt-2">
                                    Using the style attribute requires two curly brackets since the CSS is formatted as JSON. Note that instead of using dashes (<strong className="code">background-color</strong>), you need to use lowerCamelCase (<strong className="code">backgroundColor</strong>).
                                </Alert>

                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">

                    <Accordion.Header>Importing Components</Accordion.Header>

                    <Accordion.Body>
                        <ListGroup as="ol" variant="flush" numbered>
                            <ListGroup.Item>
                                You can import components at the top of another component or the "top component" <strong className="code">App.js</strong>. In the path, you do not need to add the file type <strong className="code">.js</strong><br/>
                                <Figure className="ms-3 mt-2">
                                    <Figure.Image alt="import a custom component" src={require("../images/screenshot-import-component1.png")} rounded/>
                                    <Figure.Caption>import a custom component</Figure.Caption>
                                </Figure>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                To display the component, you need to add it as a HTML element.<br/>
                                <Figure className="ms-3 mt-2">
                                    <Figure.Image alt="insert custom component as HTML element" src={require("../images/screenshot-import-component2.png")} rounded/>
                                    <Figure.Caption>insert custom component</Figure.Caption>
                                </Figure>
                                <br/>
                                <Figure className="ms-3">
                                    <Figure.Image alt="custom component in DOM" src={require("../images/screenshot-import-component3.png")} rounded/>
                                    <Figure.Caption>custom component in DOM</Figure.Caption>
                                </Figure>

                                <Alert variant="warning" className="mt-2">
                                    Remember that in JSX, HTML tags must always be closed.
                                </Alert>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">

                    <Accordion.Header>Importing Bootstrap Components</Accordion.Header>

                    <Accordion.Body>
                        <ListGroup as="ol" variant="flush" numbered>
                            <ListGroup.Item>
                                Just like with your own components, you need to import Bootstrap components at the top of another component.<br/>
                                <Figure className="ms-3 mt-2">
                                    <Figure.Image alt="import a bootstrap button component" src={require("../images/screenshot-import-bscomponent1.png")} rounded/>
                                    <Figure.Caption>import a bootstrap button component</Figure.Caption>
                                </Figure>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                To display the component, you need to add it as a HTML element.<br/>
                                <Figure className="ms-3 mt-2">
                                    <Figure.Image alt="insert bootstrap button component as HTML element" src={require("../images/screenshot-import-bscomponent2.png")} rounded/>
                                    <Figure.Caption>insert bootstrap button component</Figure.Caption>
                                </Figure>
                                <br/>
                                <Figure className="ms-3">
                                    <Figure.Image alt="bootstrap button component in DOM" src={require("../images/screenshot-import-bscomponent3.png")} rounded/>
                                    <Figure.Caption>bootstrap button component in DOM</Figure.Caption>
                                </Figure>

                                <Alert variant="warning" className="mt-2">
                                    Bootstrap components are highly customisable. For further information, it is useful to check the official{' '}
                                    <Alert.Link href="https://react-bootstrap.netlify.app/" target="_blank">React-Bootstrap Documentation</Alert.Link>.
                                </Alert>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </Row>
        </>
    );
}

export default Development;