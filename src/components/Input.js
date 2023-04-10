import React from 'react'
import { Container, InputGroup, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import store from '../app/store'
import { addtodo } from '../features/todoSlice'

export default function Input() {
    const [input, setInput] = useState('')

    function addTask(){
        input != "" && store.dispatch(addtodo(input))
    }

  return (
    <Container className='w-25 mt-3'>
        <InputGroup>
            <Form.Control 
            placeholder="Task" 
            className='md-1'
            onChange={(event) => {
                setInput(event.target.value)
                }}/>
            <Button onClick={addTask}>OK</Button>
        </InputGroup>
    </Container>
  )
}
