import { createSlice } from "@reduxjs/toolkit";

// localStorage.clear('mon_localstorage')
// localStorage.clear('all_localstorage')
const initialState = {
    loc: {
            all: localStorage.getItem('all_localstorage') != null ? JSON.parse(localStorage.getItem('all_localstorage')) : [],
            mon: localStorage.getItem('mon_localstorage') != null ? JSON.parse(localStorage.getItem('mon_localstorage')) : [],
            tues: localStorage.getItem('tues_localstorage') != null ? JSON.parse(localStorage.getItem('tues_localstorage')) : [],
            wed: localStorage.getItem('wed_localstorage') != null ? JSON.parse(localStorage.getItem('wed_localstorage')) : [],
            thurs: localStorage.getItem('thurs_localstorage') != null ? JSON.parse(localStorage.getItem('thurs_localstorage')) : [],
            fri: localStorage.getItem('fri_localstorage') != null ? JSON.parse(localStorage.getItem('fri_localstorage')) : [],
            sat: localStorage.getItem('sat_localstorage') != null ? JSON.parse(localStorage.getItem('sat_localstorage')) : [],
            sun: localStorage.getItem('sun_localstorage') != null ? JSON.parse(localStorage.getItem('sun_localstorage')) : [],
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
            state.loc.all = state.loc.all.filter(item => item.id !== task_id.payload)
            state.loc.mon = state.loc.mon.filter(item => item.id !== task_id.payload)
            state.loc.tues = state.loc.tues.filter(item => item.id !== task_id.payload)
            state.loc.wed = state.loc.wed.filter(item => item.id !== task_id.payload) 
            state.loc.thurs = state.loc.thurs.filter(item => item.id !== task_id.payload) 
            state.loc.fri = state.loc.fri.filter(item => item.id !== task_id.payload) 
            state.loc.sat = state.loc.sat.filter(item => item.id !== task_id.payload)
            state.loc.sun = state.loc.sun.filter(item => item.id !== task_id.payload) 
        },
        drag: (state, task) => {
            state.loc.dragged = task.payload
            if(task.payload.taskLocation === 'all'){
              state.loc.all = state.loc.all.filter(item => item.id !== task.payload.id)  
            }else
                if(task.payload.taskLocation === 'mon'){
                    state.loc.mon = state.loc.mon.filter(item => item.id !== task.payload.id)
                }else
                if(task.payload.taskLocation === 'tues'){
                    state.loc.tues = state.loc.tues.filter(item => item.id !== task.payload.id)
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
                case 'tues':{
                    state.loc.dragged.taskLocation = 'tues'
                    state.loc.tues = [
                        ...state.loc.tues,
                            state.loc.dragged,
                    ]
                     localStorage.setItem("tues_localstorage", JSON.stringify(state.loc.tues))
                    break;
                }
                case 'wed':{
                    state.loc.dragged.taskLocation = 'wed'
                    state.loc.wed = [
                        ...state.loc.wed,
                            state.loc.dragged,
                    ]
                     localStorage.setItem("wed_localstorage", JSON.stringify(state.loc.wed))
                    break;
                }
                case 'thurs':{
                    state.loc.dragged.taskLocation = 'thurs'
                    state.loc.thurs = [
                        ...state.loc.thurs,
                            state.loc.dragged,
                    ]
                     localStorage.setItem("thurs_localstorage", JSON.stringify(state.loc.thurs))
                    break;
                }
                case 'fri':{
                    state.loc.dragged.taskLocation = 'fri'
                    state.loc.fri = [
                        ...state.loc.fri,
                            state.loc.dragged,
                    ]
                     localStorage.setItem("fri_localstorage", JSON.stringify(state.loc.fri))
                    break;
                }
                case 'sat':{
                    state.loc.dragged.taskLocation = 'sat'
                    state.loc.sat = [
                        ...state.loc.sat,
                            state.loc.dragged,
                    ]
                     localStorage.setItem("sat_localstorage", JSON.stringify(state.loc.sat))
                    break;
                }
                case 'sun':{
                    state.loc.dragged.taskLocation = 'sun'
                    state.loc.sun = [
                        ...state.loc.sun,
                            state.loc.dragged,
                    ]
                     localStorage.setItem("sun_localstorage", JSON.stringify(state.loc.sun))
                    break;
                }
            }
            
        }

    }
})

export const {addtodo, removetodo, drag, drop} = todoSlice.actions
export default todoSlice.reducer