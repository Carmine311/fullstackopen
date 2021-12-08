import React from 'react'

const Hello = ({name, age}) => {
  
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app created by Carmine
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Carmine" age={26 + 10} />
      <Hello name="Frank" age={age} />
      <Footer />
    </>
  )
}

export default App;
