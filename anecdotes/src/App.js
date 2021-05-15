import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  // creating the votes array and assiging all initial votes counts to o
  const ballots = [];

  for (let i = 0; i < anecdotes.length; i++) { ballots.push(0) }

  // react hooks
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(ballots)
  const [topVoted, setTopVoted] = useState(0)

  // button function
  const randomize = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    setTopVoted(Object.values(votes).indexOf(Math.max(...Object.values(votes))))
  }

  // voting function
  const addVotes = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    setTopVoted(Object.values(copy).indexOf(Math.max(...Object.values(copy))))
  }

  // setting conditional to display or not top voted
  if (Math.max(...Object.values(votes)) === 0) {
    return (
      <div>
        <h2>Anectode of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
        <Button handleClick={addVotes} text="Vote" />
        <Button handleClick={randomize} text="Next Anecdote" />
      </div>
    )
  } else {
    return (
      <div>
        <h2>Anectode of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
        <Button handleClick={addVotes} text="Vote" />
        <Button handleClick={randomize} text="Next Anecdote" />
        <h2>Anectode with most votes</h2>
        <p>{anecdotes[topVoted]}</p>
        <p>Has {votes[topVoted]} votes</p>
      </div>
    )
  }

}

export default App