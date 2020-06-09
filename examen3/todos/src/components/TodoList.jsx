import React, {useEffect, useState} from 'react'
import {firebase} from '../firebase'
// import TodoTask from './TodoTask'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getData = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('todos').get()
                setTodos(data.docs.map(doc => ({ id: doc.id, ...doc.data()})))
                console.log(todos)
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    },[])

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        {
                            todos.map( todo  => {
                                // console.log("todo");
                                return <a 
                                    key={todo.id} 
                                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                    id= {`list-${todo.id}-list`}
                                    data-toggle="list" 
                                    href= {`#list-${todo.id}`}
                                    role="tab" 
                                    aria-controls={todo.id}>
                                        {todo.name}{
                                        todo.urgent ? 
                                            <span class="badge badge-danger badge-pill">Urgent</span>
                                            :
                                            <></>
                                        }
                                    </a>
                            })
                        }
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                    {
                            todos.map( todo  => {
                                console.log("todo");
                                return <div 
                                    class="tab-pane fade" 
                                    id={`list-${todo.id}`} 
                                    role="tabpanel" 
                                    aria-labelledby={`list-${todo.id}-list`}>
                                        <h3 className="display-4">{todo.name}</h3>
                                        {todo.description}
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList
