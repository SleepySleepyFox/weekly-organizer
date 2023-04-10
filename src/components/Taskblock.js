import React from "react"
import { removetodo, drag } from '../features/todoSlice'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Container, CloseButton, Dropdown } from 'react-bootstrap'
import store from "../app/store"

function Taskblock (props) {

    const display = (taskStorage) =>
  taskStorage.map(e => (
      <Container 
        className='w-50 p-2 mb-t-2 mt-2 h-25 d-flex flex-grow-1 justify-content-between bg-light rounded'
        draggable = {true}
        key = {e.id}
        onDragOver={(e) => e.preventDefault()}
        onDrag={() => store.dispatch(drag(e))}
      >
          {e.taskContent.length < 16 ? 
          <Container className="d-flex justify-content-center"><h1>{e.taskContent}</h1></Container>:
          <Dropdown className='w-100 dropdown-colo' style={{background: "transparant"}}>
            <DropdownToggle className='w-100 btn-light '>
              <h1 className='text-truncate' style={{color: 'black'}}>{e.taskContent}</h1>
            </DropdownToggle>
            <DropdownMenu className='w-100 w-auto justify-self-center'> 
              <DropdownItem className='w-100 text-break btn-light'>
                <Container className='d-flex justify-content-between'>
                  <p className="text-wrap">{e.taskContent}</p>
                  <CloseButton className='align-self-center' onClick={() => store.dispatch(removetodo(e.id))}/>
                </Container>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>}
          {e.taskContent.length <= 26 && <CloseButton className='align-self-center' onClick={() => store.dispatch(removetodo(e.id))}/>}
      </Container>
    )
  )
  return (
    <>
      {display(props.contentStorage)}
    </>
  )
};

export default Taskblock;
