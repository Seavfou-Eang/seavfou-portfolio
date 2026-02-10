import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ChatBot.css'

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Seavfou's assistant. How can I help you today?"
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const botResponses = {
    'hello': "Hello! Nice to meet you! 👋",
    'hi': "Hi there! How can I assist you? 😊",
    'hey': "Hey! What's up?",
    'about': "Seavfou-Eang is a 17-year-old Software Engineering student at CADT who loves learning new technologies!",
    'skills': "Seavfou is skilled in Python, JavaScript, React, HTML/CSS, and more. Check out the Skills page for details!",
    'projects': "Seavfou has built projects like YT Downloader. Visit the Projects page to see more!",
    'contact': "You can reach Seavfou via email at seavfou.eang@gmail.com or through the Contact page!",
    'github': "Check out Seavfou's GitHub: https://github.com/Seavfou-Eang",
    'age': "Seavfou is 17 years old! 🎂",
    'school': "Seavfou studies at CADT (Cambodia Academy of Digital Technology)",
    'bye': "Goodbye! Have a great day! 👋",
    'thank': "You're welcome! Happy to help! 😊",
    'help': "I can tell you about Seavfou's skills, projects, contact info, or answer general questions. What would you like to know?"
  }

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerInput.includes(key)) {
        return response
      }
    }
    
    return "I'm not sure I understand. Try asking about Seavfou's skills, projects, or how to contact him!"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = {
      type: 'user',
      text: inputValue
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: getBotResponse(userMessage.text)
      }
      setMessages(prev => [...prev, botMessage])
    }, 600)
  }

  return (
    <div className="chatbot">
      {/* Chat Toggle Button */}
      <motion.button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-header">
              <div className="chat-avatar">
                <img 
                  src="https://avatars.githubusercontent.com/u/260343091?v=4" 
                  alt="Seavfou"
                />
                <span className="online-indicator"></span>
              </div>
              <div className="chat-info">
                <h4>Seavfou's Assistant</h4>
                <span className="status">Online</span>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-bubble">
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="chat-input-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
              />
              <button type="submit" className="chat-send-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChatBot
