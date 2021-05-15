import React, { useState } from 'react'

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [votes, setVote] = useState(0)

  // button functions

  const voteGood = () => {
    setGood(good + 1)
    setVote(votes + 1)
  }

  const voteNeutral = () => {
    setNeutral(neutral + 1)
    setVote(votes + 1)
  }

  const voteBad = () => {
    setBad(bad + 1)
    setVote(votes + 1)
  }

  // value calculations for all, average, and positive feedbacks
  let all = good + neutral + bad
  let average = ((good + (bad * -1)) / votes)
  let positive = (good / votes) * 100

  if (!votes) {
    return (
      <div>
        <Header title="Give feedback" />

        <Button handleClick={voteGood} text="Good" />
        <Button handleClick={voteNeutral} text="Neutral" />
        <Button handleClick={voteBad} text="Bad" />

        <Header title="Statistics" />
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <Header title="Give feedback" />

        <Button handleClick={voteGood} text="Good" />
        <Button handleClick={voteNeutral} text="Neutral" />
        <Button handleClick={voteBad} text="Bad" />

        <Header title="Statistics" />
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={all} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
  }
}

export default App