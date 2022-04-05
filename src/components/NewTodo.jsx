import React, {useState} from 'react'
import classes from './newtodo.module.css'

const NewTodo = (props) => {

     const [todo ,setTodo] = useState({title: "" , desc:""})
     const {title,desc} = todo;
     const handleChange = (e) =>{
         const name = e.target.name;
         setTodo((oldTodo) =>{
             return {...oldTodo, [name]: e.target.value}
         })
     }
    const handleSubmit = (e) =>{
       e.preventDefault();
       props.onAddTodo(todo)
       setTodo({title : "", desc: ""})
    }
  return (
     <form className={classes.form} onSubmit={handleSubmit}>
         <div className={classes["form-field"]}>
             <label htmlFom="title">Title :</label>
             <input type="text" id="title" name="title" value={title} onChange={handleChange}/>
         </div>
         <div className={classes["form-field"]}>
             <label htmlFom="desc">Description :</label>
             <textarea type="text" id="desc" name="desc" value={desc} onChange={handleChange} />
         </div>
         <button type='submit'> Add Todo</button>
     </form>
  )
}

export default NewTodo