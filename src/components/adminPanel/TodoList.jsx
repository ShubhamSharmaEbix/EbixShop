import React from 'react'

const TodoList = () => {
  return (
    <div className="card">
        <div className="card-body px-0">
            <h4 className="card-title px-4 mb-3">Todo</h4>
            <div className="todo-list">
                <div className="tdl-holder">
                    <div className="tdl-content">
                        <ul id="todo_list">
                            <li><label><input type="checkbox"/><i></i><span>Get up</span><a href='#' className="ti-trash"></a></label></li>
                            <li><label><input type="checkbox" defaultChecked/><i></i><span>Stand up</span><a href='#' className="ti-trash"></a></label></li>
                            <li><label><input type="checkbox"/><i></i><span>Don't give up the fight.</span><a href='#' className="ti-trash"></a></label></li>
                            <li><label><input type="checkbox" defaultChecked/><i></i><span>Do something else</span><a href='#' className="ti-trash"></a></label></li>
                        </ul>
                    </div>
                    <div className="px-4">
                        <input type="text" className="tdl-new form-control" placeholder="Write new item and hit 'Enter'..."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList