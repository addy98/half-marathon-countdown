import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Message extends React.Component {

    render() {
        return (
            <div className='message'>
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
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
}

export default Message