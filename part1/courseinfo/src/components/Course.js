import React from 'react'

const Course = ({ course }) => (
    <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
    </div>
)

const Header = ({ text }) => <h1>{text}</h1>

const Content = ({ parts }) => (
    <div>
        {parts.map(part =>
            <Part key={part.id} title={part.name} exercises={part.exercises} />
        )}

        <Total exercises={parts.map(part => part.exercises)} />
    </div>
)

const Part = (props) => (
    <p>
        {props.title} {props.exercises}
    </p>
)

const Total = ({ exercises }) =>
    <p>Number of exercises {exercises.reduce((p, c) => p + c)}</p>

export default Course