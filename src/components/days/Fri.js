import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Taskblock from '../Taskblock'

export default function Fri() {
  const selectAllValue = (state) => state.todoSlice.loc.fri
  const task = useSelector(selectAllValue)

  useEffect(() =>{localStorage.setItem('fri_localstorage', JSON.stringify(task))},[task])
  return (
    <Taskblock 
      contentStorage={task}
    />
  )
}
