import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Taskblock from '../Taskblock'

export default function Tues() {
  const selectAllValue = (state) => state.todoSlice.loc.tues
  const task = useSelector(selectAllValue)

  useEffect(() =>{localStorage.setItem('tues_localstorage', JSON.stringify(task))},[task])
  return (
    <Taskblock 
      contentStorage={task}
    />
  )
}
