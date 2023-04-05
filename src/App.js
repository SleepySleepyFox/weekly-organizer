import "./App.css"
import { Navbar, Nav, Container, ThemeProvider, InputGroup, Button, Form, CloseButton, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import store from './app/store'
import { addtodo, drop } from './features/todoSlice'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import Taskblock from "./components/Taskblock"




export default function App() {
  const selectAllValue = (state) => state.todoSlice.loc.all
  const [input, setInput] = useState('')
  const task = useSelector(selectAllValue)

  useEffect(() => {localStorage.setItem('all_localstorage', JSON.stringify(task))},[task])

  function addTask(){
    input != "" && store.dispatch(addtodo(input))
    console.log(task)
  }
  
  return (
      <div >
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
          <div 
            style={{height: '85vh'}}
            onDrop={() => store.dispatch(drop('all'))}
            onDragOver={(e) => e.preventDefault()}
          >
            <Container className='justify-content-center'>
              <Taskblock 
              contentStorage={task}
              />
            </Container>
          </div>
      </ThemeProvider>
      </div>
      
    
  )
}
