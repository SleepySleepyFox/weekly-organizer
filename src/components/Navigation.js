import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import store from '../app/store'
import { drop } from '../features/todoSlice'

export default function Navigation() {
  return (
        <Navbar bg='light' variant='light' className='justify-content-center' expand="sm"
            onDragOver={(e) => e.preventDefault()}>
            <Nav>
              <Nav.Item className='me-3'><Nav.Link href ="/" onDrop={() => store.dispatch(drop("all"))}>All</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Mon" onDrop={() => store.dispatch(drop("mon"))}>Mon</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Tues" onDrop={() => store.dispatch(drop("tues"))}>Tues</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Wed" onDrop={() => store.dispatch(drop("wed"))}>Wed</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Thurs" onDrop={() => store.dispatch(drop("thurs"))}>Thurs</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Fri" onDrop={() => store.dispatch(drop("fri"))}>Fri</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Sat" onDrop={() => store.dispatch(drop("sat"))}>Sat</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Sun" onDrop={() => store.dispatch(drop("sun"))}>Sun</Nav.Link></Nav.Item>
            </Nav>
    </Navbar>
  )
}
