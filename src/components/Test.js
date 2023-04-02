
import Button from 'react-bootstrap/Button';

function Test() {
    const variable = "Button";
    return(
        <>
        <button type="submit"
                name="submit-button"
                style={{display: "inline-block", margin: ".5rem", padding: ".5rem", backgroundColor: "#5b5b5b", color: "white", border: "0"}}
        >
            {variable}
        </button>

        <Button as="submit" size="lg" variant="primary" active>
            Button
        </Button>

        </>
    );
}

export default Test;