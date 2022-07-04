import { useState } from 'react';
import Todo from './Todo';

const List = ({list}) => {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);

     const handleSubmit = () => {
        setTodos(prevState => [...prevState, {id:1, title: value}]);
        setValue('');
    }   

    return(
        <div className="list">
            <div><strong>{list.title}</strong></div>
            <input value={value} onChange={e => setValue(e.target.value)} placeholder="Nouvelle tâche" />
            <button className="todo-button" onClick={() => handleSubmit()}>Nouvelle tâche</button>
            <img  className="liste" src="https://media.istockphoto.com/vectors/notepad-paper-tick-mark-drawing-vector-id534759615" alt="liste" />
            <hr />
            {todos.map((todo, id) => <Todo todo={todo} key={id} />)}
        </div>    
    )
}


export default List;





































