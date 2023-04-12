import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Taskblock from '../Taskblock'

export default function Mon() {
  const selectAllValue = (state) => state.todoSlice.loc.mon
  const task = useSelector(selectAllValue)

  console.log(task)
  useEffect(() =>{localStorage.setItem('mon_localstorage', JSON.stringify(task))},[task])
  return (
    <Taskblock 
      contentStorage={task}
    />
  )
}
