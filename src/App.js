import "./App.css"
import { Container, ThemeProvider, InputGroup, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useEffect} from 'react'
import store from './app/store'
import { drop } from './features/todoSlice'
import Taskblock from "./components/Taskblock"
import Navigation from "./components/Navigation"
import Input from "./components/Input"




export default function App() {
  const selectAllValue = (state) => state.todoSlice.loc.all
  const task = useSelector(selectAllValue)

  useEffect(() => {localStorage.setItem('all_localstorage', JSON.stringify(task))},[task])
  
  return (
      <div>
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
          <Navigation />
          <Input />
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
