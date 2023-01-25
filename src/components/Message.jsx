import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Message(props) {

    return (
        <div className='message'>
            <Form id="messageForm" onSubmit={props.handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Your message to Abby!" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send message
                </Button>
            </Form>
        </div>
    )
}

export default Message