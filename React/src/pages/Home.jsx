import React, { useState, useEffect } from 'react'

export default function HeroesData() {
  const [heroes, fetchHeroes] = useState([])

  const getData = () => {
    fetch('http://localhost:8000/heroes/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchHeroes(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h2>Heroes List</h2>
      <ul>
        {heroes.map((item, i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}