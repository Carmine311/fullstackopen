import React, { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({ text, handler }) => <button onClick={handler}>{text}</button>

const Display = ({ label, data }) => <div>{label} {data}</div>

const Statistics = (props) => {
  return (
    <div>
      <Header text={props.header} />
      <Display label="Good" data={props.goodData} />
      <Display label="Neutral" data={props.neutralData} />
      <Display label="Bad" data={props.badData} />
      <Display label="All" data={props.allData} />
      <Display label="Average" data={props.avgData} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => setGood(good + 1)
  const updateNeutral = () => setNeutral(neutral + 1)
  const updateBad = () => setBad(bad + 1)
  const getTotal = () => good + neutral + bad
  const getAvg = () => {
    let total = getTotal()
    return total === 0 ? 0 : (good + -bad) / getTotal()
  }

  return (
    <div className="App">
      <Header text="Give Feedback" />
      <Button text="good" handler={updateGood} />
      <Button text="neutral" handler={updateNeutral} />
      <Button text="bad" handler={updateBad} />
      <Statistics header="Statistics"
        goodData={good}
        neutralData={neutral}
        badData={bad}
        allData={getTotal()}
        avgData={getAvg()} />
    </div>
  );
}

export default App;
