import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Taskblock from '../Taskblock'

export default function Wed() {
  const selectAllValue = (state) => state.todoSlice.loc.wed
  const task = useSelector(selectAllValue)

  useEffect(() =>{localStorage.setItem('wed_localstorage', JSON.stringify(task))},[task])
  return (
    <Taskblock 
      contentStorage={task}
    />
  )
}
