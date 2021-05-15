import React from 'react'

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

const Header = (props) => {
  let i = course.name;
  return (
    <div>
      <h1>{i}</h1>
    </div>
  )
}

const Content = (props) => {
  let i = course.parts;
  return (
    <div>
      <p>{i[0].name} {i[0].exercises}</p>
      <p>{i[1].name} {i[1].exercises}</p>
      <p>{i[2].name} {i[2].exercises}</p>
    </div>
  )
}

//BELOW POSSIBLE SOLUTION FOR ITERATING THE ARRAY.

// const Content = (props) => {
//   let i = course.parts.map(value => <p>{value.name} {value.exercises}</p>)
//   return (
//     <div>
//       {i}
//     </div>
//   )
// }

const Total = (props) => {
  let i = course.parts;
  return (
    <p>Number of exercises {i[0].exercises + i[1].exercises + i[2].exercises}</p>
  )
}

// BELOW POSSIBLE SOLUTION FOR ITERATING THE ARRAY.

// const Total = (props) => {
//   let i = course.parts;
//   let array = [];
//   i.map(value => array.push(value.exercises));
//   let sum = array.reduce((a, b) => { return a + b }, 0);
//   return (
//     <div>
//     <p>Number of exercises {sum}</p>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App