import ProgressBar from 'react-bootstrap/ProgressBar';

function Footer(props) {
    return(
        <>
        <ProgressBar now={props.progress} label={props.progress + "%"} className="fixed-bottom" />
        </>
    );
}

export default Footer;