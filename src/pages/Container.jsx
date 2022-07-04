import { useState } from 'react';
import List from '../components/List';


const Container = ({container}) => {

    const [value, setValue] = useState('');
    const [lists, setLists] = useState([]);

    const handleSubmit = () => {
        setLists(prevState => [...prevState, { id: 1, title: value }]);
        setValue('');
    }

    return (
        <div className="container">
            <h2><strong>{container.title}</strong></h2>
            <input value={value} onChange={e => setValue(e.target.value)} placeholder="Ajouter une liste" />
            <button className="list-button" onClick={() => handleSubmit()}>Créer une nouvelle liste</button>
            <img  className="trello" src="https://marklewis.fr/wp-content/uploads/2020/02/Trello-Logo.png" alt="trello" />
            <hr />
            {lists.map((list, id) => <List list={list} key={id} />)}
        </div>
    )
}


export default Container;