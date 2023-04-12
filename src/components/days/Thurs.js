import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Taskblock from '../Taskblock'

export default function Thurs() {
  const selectAllValue = (state) => state.todoSlice.loc.thurs
  const task = useSelector(selectAllValue)

  useEffect(() =>{localStorage.setItem('thurs_localstorage', JSON.stringify(task))},[task])
  return (
    <Taskblock 
      contentStorage={task}
    />
  )
}
