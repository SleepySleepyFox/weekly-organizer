import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Taskblock from '../Taskblock'

export default function Sat() {
  const selectAllValue = (state) => state.todoSlice.loc.sat
  const task = useSelector(selectAllValue)

  useEffect(() =>{localStorage.setItem('sat_localstorage', JSON.stringify(task))},[task])
  return (
    <Taskblock 
      contentStorage={task}
    />
  )
}
