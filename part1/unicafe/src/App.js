import React, { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({ text, handler }) => <button onClick={handler}>{text}</button>

const StatisticsLine = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td> {value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  if (props.allData === 0) {
    return (
      <div>
        <Header text={props.header} />
        <p>{props.noData}</p>
      </div>
    )
  }
  else {
    return (<div>

      <table>
        <thead>
          <tr>
            <td>
              <Header text={props.header} />
            </td>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine label="Good" value={props.goodData} />
          <StatisticsLine label="Neutral" value={props.neutralData} />
          <StatisticsLine label="Bad" value={props.badData} />
          <StatisticsLine label="All" value={props.allData} />
          <StatisticsLine label="Average" value={props.avgData} />
          <StatisticsLine label="Positive" value={props.posPct + '%'} />
        </tbody>
      </table>
    </div>)
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getTotal = () => good + neutral + bad
  const getAvg = () => {
    let total = getTotal()
    return total === 0 ? 0 : (good + -bad) / total
  }
  const getPosPct = () => {
    let total = getTotal()
    return total === 0 ? 0 : good / total
  }

  const giveFeedback = (value) => {
    if (value === -1) return () => setBad(bad + 1)
    if (value === 1) return () => setGood(good + 1)
    if (value === 0) return () => setNeutral(neutral + 1)
  }

  return (
    <div className="App">
      <Header text="Give Feedback" />
      <Button text="good" handler={giveFeedback(1)} />
      <Button text="neutral" handler={giveFeedback(0)} />
      <Button text="bad" handler={giveFeedback(-1)} />
      <Statistics header="Statistics"
        noData="No feedback given"
        goodData={good}
        neutralData={neutral}
        badData={bad}
        allData={getTotal()}
        avgData={getAvg()}
        posPct={getPosPct()} />
    </div>
  );
}

export default App;
