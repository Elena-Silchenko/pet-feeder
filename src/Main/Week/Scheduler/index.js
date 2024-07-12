import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Scheduler() {
    return (
        <div>
            <div>
                <div>
                    <div className="d-flex mb-4">
                        <div className="me-5">12:00</div>
                        <Button variant="outline-primary">&mdash;</Button>
                    </div>
                    <div className="d-flex mb-4">
                    <div className="me-5">15:00</div>
                    <Button variant="outline-primary">&mdash;</Button>
                    </div>
                </div>
            </div>
            <div>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">12:00</option>
                <option value="2">15:00</option>
            </Form.Select>
            </div>
        </div>
    );
}