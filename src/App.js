import Hero from './components/Hero'
import Content from './components/Content'
import Board from './components/Board'
import Footer from './components/Footer'
import { fetchMessages, writeNewMessage } from './utils/firebase'
import { useState, useEffect } from 'react'

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages(fetchMessages())
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    let name = document.getElementById('name').value
    let message = document.getElementById('message').value
    writeNewMessage(name, message)
    document.getElementById('name').value = ''
    document.getElementById('message').value = ''
    setMessages(fetchMessages())
  }

  return (
    <div className="App">
      <Hero></Hero>
      <Content handleSubmit={handleSubmit}></Content>
      <Board messages={messages}></Board>
      <Footer></Footer>
    </div>
  )
}

export default App
