import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar bg='light' variant='light' className='justify-content-center' expand="sm">
            <Nav>
              <Nav.Item className='me-3'><Nav.Link href ="/">All</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Mon">Mon</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Tues">Tues</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Wed">Wed</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Thurs">Thurs</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Fri">Fri</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Sat">Sat</Nav.Link></Nav.Item>
              <Nav.Item className='me-3'><Nav.Link href ="/Sun">Sun</Nav.Link></Nav.Item>
            </Nav>
          </Navbar>
  )
}
