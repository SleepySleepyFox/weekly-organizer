import React, { useRef } from 'react'
import "./App.css"
import { Navbar, Nav, Container, ThemeProvider, InputGroup, Button, Form, CloseButton, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import store from './app/store'
import { addtodo } from './features/todoSlice'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { useIsOverflow } from './hooks/useIsOverflow '



export default function App() {
  const selectAllValue = (state) => state.todoSlice.loc.all
  const [input, setInput] = useState('')
  const task = useSelector(selectAllValue)

  const ref = React.useRef();
  const isOverflow = useIsOverflow(ref);

  function addTask(){
    input != "" && store.dispatch(addtodo(input))
    console.log(input)
  }
  
  const display = (taskstorage) => (
    taskstorage.map(e => (
      <Container className='w-50 p-2 mb-t-2 mt-2 h-25 d-flex flex-grow-1 justify-content-between bg-light rounded'>
          {e.taskContent.length < 100 ? 
          <h1 ref={ref}>{e.taskContent}</h1> :
          <Dropdown className='w-100 dropdown-colo' style={{background: "transparant"}}>
            <DropdownToggle className='w-100 dropdown-color btn-light '>
              <h1 className='text-truncate' style={{color: 'black'}}>{e.taskContent}</h1>
            </DropdownToggle>
            <DropdownMenu className='w-100 wrap-dropdown'> 
              <DropdownItem className='w-100 text-break wrap-dropdown btn-light'>
                {e.taskContent}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>}
          {e.taskContent.length < 26 && <CloseButton className='align-self-center' />}
      </Container>
    ))
  )
  return (
      <div>
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
          <Navbar bg='light' variant='light' className='justify-content-center' expand="sm">
            <Nav>
              <Nav.Item className='me-3'><Nav.Link href ="/" variant='light'>All</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/">Mon</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/">Tues</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/">Wed</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/">Thurs</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/">Fri</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/">Sat</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/">Sun</Nav.Link></Nav.Item>
            </Nav>
          </Navbar>
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
          <Container className='justify-content-center'>
            {display(task)}
          </Container>
      </ThemeProvider>
      </div>
      
    
  )
}
