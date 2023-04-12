import "./App.css"
import { Container, ThemeProvider } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useEffect} from 'react'
import store from './app/store'
import { drop } from './features/todoSlice'
import Taskblock from "./components/Taskblock"
import Input from "./components/Input"


// У каждого компонента должен быть уникальный key иначе появляеться тот баг с удалением поэтому в каждом отдельном
// Компоненте нужно пересортировывать таски таким образом чтобы их ключи сохранялись уникальными 
// можно в самом компоненте создать переменную которая будет хранить состояния и в нее с помощью 
// .map переписывать и выволить на экран элементы которые уже будет содержать уникалный ключ 


export default function App() {
  const selectAllValue = (state) => state.todoSlice.loc.all
  const task = useSelector(selectAllValue)

  useEffect(() => {localStorage.setItem('all_localstorage', JSON.stringify(task))},[task])
  
  return (
      <div>
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
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
