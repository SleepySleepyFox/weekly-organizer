import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Taskblock from '../Taskblock'

export default function Sun() {
  const selectAllValue = (state) => state.todoSlice.loc.sun
  const task = useSelector(selectAllValue)

  useEffect(() =>{localStorage.setItem('sun_localstorage', JSON.stringify(task))},[task])
  return (
    <Taskblock 
      contentStorage={task}
    />
  )
}
