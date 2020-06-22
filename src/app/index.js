import React from 'react'

function App () {
  const getGreetingMessage = (name) => `Hi, ${name}`
  return (
    <div>
      <h1>{getGreetingMessage('Milo')}</h1>
      <code>Created by @moralesbang</code>
    </div>
  )
}

export default App
