import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
  return (
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
  )
}
