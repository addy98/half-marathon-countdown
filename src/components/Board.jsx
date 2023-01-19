import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Note from './Note'
import { fetchMessages, readMessages } from '../utils/firebase'

function Board() {
    
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        
        const fetch = async () => {
            setMessages(await readMessages())
        }
        fetch()

        // setMessages(fetchMessages())
    }, [])

    console.log(messages[0])
    
    return (
        <div className='board'>
                <Container>
                    <Row>
                        {messages.map((message, index) => (
                            <Note key={index} note={message}></Note>
                        ))}
                    </Row>
                </Container>
            </div>
    )
}

export default Board 