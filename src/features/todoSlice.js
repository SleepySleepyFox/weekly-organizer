import { createSlice } from "@reduxjs/toolkit";

// localStorage.clear('mon_localstorage')
// localStorage.clear('all_localstorage')
const initialState = {
    loc: {
            all: localStorage.getItem('all_localstorage') != null ? JSON.parse(localStorage.getItem('all_localstorage')) : [],
            mon: localStorage.getItem('mon_localstorage') != null ? JSON.parse(localStorage.getItem('mon_localstorage')) : [],
            tues: [],
            wed: [],
            thurs: [],
            fri: [],
            sat: [],
            sun: [],
            dragged: []
        },
    }

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state,input) => {
            state.loc.all = [
                ...state.loc.all,
                {
                    id: state.loc.all.length,
                    taskContent: input.payload,
                    taskLocation: "all"
                }
            ]
        },
        removetodo: (state, task_id) => {
            console.log('it works')
            state.loc.all = state.loc.all.filter(item => item.id !== task_id.payload)
            state.loc.mon = state.loc.mon.filter(item => item.id !== task_id.payload) 
        },
        drag: (state, task) => {
            state.loc.dragged = task.payload
            if(task.payload.taskLocation === 'all'){
              state.loc.all = state.loc.all.filter(item => item.id !== task.payload.id)  
            }else
                if(task.payload.taskLocation === 'mon'){
                    state.loc.mon = state.loc.mon.filter(item => item.id !== task.payload.id)
                }
        },
        drop: (state, location) => {
            switch(location.payload){
                case 'all':{
                    state.loc.dragged.taskLocation = 'all'
                    state.loc.all = [
                        ...state.loc.all,
                            state.loc.dragged,
                        ]
                        localStorage.setItem("all_localstorage", JSON.stringify(state.loc.all))
                    break;
                }
                case 'mon':{
                    state.loc.dragged.taskLocation = 'mon'
                    state.loc.mon = [
                        ...state.loc.mon,
                            state.loc.dragged,
                    ]
                     localStorage.setItem("mon_localstorage", JSON.stringify(state.loc.mon))
                    break;
                }
            }
            
        }

    }
})

export const {addtodo, removetodo, drag, drop} = todoSlice.actions
export default todoSlice.reducer