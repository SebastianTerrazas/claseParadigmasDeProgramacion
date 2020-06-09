import React, {useEffect ,useState} from 'react'
import {firebase} from '../firebase'
import $ from "jquery"

const AddHeader = () => {
    const [addName, setAddName] = useState("")
    const [addDescription, setAddDescription] = useState("")
    const [addUrgent, setAddUrgent] = useState(false)
    const [todos, setTodos] = useState([])
    const [deleteTemp, setDeleteTemp] = useState("")
    const editIcon = 
                    <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
                        <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
                    </svg>
    const deleteIcon = 
                    <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>

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

    const addTodo = async (e) => {
        e.preventDefault()
        if(!addName.trim()) {
            console.log('empty')
            // document.getElementById("button-addon2").style.cursor = "not-allowed"
            return
        }
        // document.getElementById("button-addon2").style.cursor = "pointer"

        try {
            const db = firebase.firestore()
            const data = await db.collection('todos').add({
                name: addName,
                description: addDescription,
                urgent: addUrgent
            })
            
            const todoNew = {
                name: addName,
                description: addDescription,
                urgent: addUrgent,
            }

            setTodos([
                ...(todos.filter(e => e.id)),
                {id: data.id, ...todoNew}
            ])
            setAddName("")
            setAddDescription("")
            setAddUrgent(false)
        } catch (error) {
            console.error(error)
        }
    }
    // $('#deleteModal').on('show.bs.modal', function () {
    //     // var button = $(event.relatedTarget);
    //     //     var id = button.data('id');
    //     console.log("test delete");
    //     // $('#userForm').attr("action", "" + "/" + id);
    // })

    return (
        <>
        {/* HEADER */}
        <h1 className="display-3 col">
            To-Do List
            <small className="display-3 text-muted" style={{marginLeft : ".5rem", fontSize : "3rem"}}>
            by <a href="https://github.com/SebastianTerrazas" target="_blank" style={{textDecoration: "none"}}>brody</a>.
            </small>
        </h1>

        {/* ADD STUFF */}
        <form onSubmit={ addTodo }>
            <div className="vertical-input-group">
                <div className="input-group input-group-lg mb-3 col">
                    <input type="text" className="form-control" placeholder="Add todo" aria-label="Add todo" aria-describedby="button-addon2" 
                        value={addName} 
                        onChange={e => setAddName(e.target.value) }
                    />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit" id="button-addon2" style={{}}>
                            Add
                        </button>
                    </div>
                </div>
                <div className="input-group input-group-md mb-3 col" style={{"margin-top" : "-1rem"}}>
                    <input type="text" className="form-control" placeholder="Add description" aria-label="Add description" aria-describedby="button-addon2"
                        value={addDescription} 
                        onChange={e => setAddDescription(e.target.value) }
                    />
                    <div class="input-group-append">
                        <button class="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            value={addUrgent} 
                            onChange={e => setAddUrgent(addUrgent) }
                        >
                            {addUrgent ? 'Urgent' : 'Not urgent'}
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" onClick={() => setAddUrgent( false )}>
                                Not urgent
                            </a>
                            <a class="dropdown-item" href="#" onClick={() => setAddUrgent( true )}>
                                Urgent
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        {/* SHOW STUFF */}
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
                                        <h3 className="display-4">
                                            {todo.name}
                                            <a>
                                                {editIcon}
                                            </a>
                                            <a
                                            key={`E${todo.id}`} 
                                            className="" 
                                            id= {`edit-${todo.id}`}
                                            data-toggle="modal"
                                            href= "#deleteModal"
                                            onClick={() => setDeleteTemp( todo.id )}
                                            data-id= {todo.id}
                                            style={{color : "white"}}
                                            >
                                                {deleteIcon}
                                            </a>
                                        </h3>
                                        {todo.description}
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

        {/* DELETE MODAL */}
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalTitle" aria-hidden="true" style={{color:"black"}}>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Nevermind</button>
                        <button type="button" class="btn btn-danger" onClick={() => console.log(deleteTemp)}>Yes!</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddHeader
