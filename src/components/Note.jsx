import React from 'react'
import { Col } from 'react-bootstrap'

class Note extends React.Component {

    render() {
        const note = this.props.note
        return (
            <Col lg={4}>
                <div className='note'>{note['message']}<br></br>- {note['name']}</div>
            </Col>
        )
    }
}

export default Note