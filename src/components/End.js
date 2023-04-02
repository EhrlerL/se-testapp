import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

function End() {
    return(
        <>
        <Row className="justify-content-center">
            <Image src={require("../images/React-icon.png")} className="opacity-50" style={{ position: "fixed", zIndex: "-1"}}/>
        </Row>
        
        <Row className="my-2">
            <h1 className="text-center">Thanks for Your Attention</h1>
        </Row>

        <Row clasName="justify-content-center">
            <Figure className="text-center">
                <Figure.Image src={require("../images/qr-code.png")} style={{height: "15rem", width: "auto"}} alt="GitHub Repository QR-Code" rounded/>
                <Figure.Caption>GitHub</Figure.Caption>
            </Figure>
        </Row>
        </>
    );
}

export default End;