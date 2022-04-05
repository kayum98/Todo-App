import React from 'react'
import classes from './todo.module.css'


const Todo = (props) => {
    const { title, desc, } = props.todo;
    const { id} = props;

    const handleClick = (id) =>{
        props.onRemoveTodo(id)
    }
  return (
    <article className={classes.todo}>
        <div>
            <h3>{title} </h3>
            <p>{desc} </p>
        </div>
        <div>
            <button className={classes.btn}>
                <i className='fa fa-trash fa-2x' onClick={()=>{handleClick(id)}}></i>
            </button>
        </div>
    </article>
  )
}

export default Todo