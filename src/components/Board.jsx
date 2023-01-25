import { Container, Row } from 'react-bootstrap'
import Note from './Note'

function Board(props) {
    
    return (
        <div className='board'>
            <Container>
                <Row>
                    {props.messages.map((message, index) => (
                        <Note key={index} note={message}></Note>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Board 