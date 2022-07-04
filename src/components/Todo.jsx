const Todo = ({ todo }) => {
    return (
        <div className="to-do">
            <em>{todo.title}</em>
            <img  className="todo" src="https://media.istockphoto.com/photos/to-do-postit-picture-id157567356?s=612x612" alt="todo" />
        </div>
    )
}

export default Todo;