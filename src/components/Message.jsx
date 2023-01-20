import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { writeNewMessage } from '../utils/firebase'

class Message extends React.Component {

    render() {

        function handleSubmit(e) {
            e.preventDefault()
            let name = document.getElementById('name').value
            let message = document.getElementById('message').value
            writeNewMessage(name, message)
            document.getElementById('name').value = '';
            document.getElementById('message').value = '';
        }

        return (
            <div className='message'>
                <Form id="messageForm" onSubmit={handleSubmit}>
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
}

export default Message