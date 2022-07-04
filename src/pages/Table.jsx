import { useState } from 'react';
import Container from './Container';


const Table = () => {

    const [value, setValue] = useState('');
    const [containers, setContainers] = useState([]);

    const handleSubmit = () => {
        setContainers(prevState => [...prevState, { id: 1, title: value }]);
        setValue('');
    }

    return (
        <div className="table">
            <h1><strong>Tableau de trello</strong></h1>
            <input value={value} onChange={e => setValue(e.target.value)} placeholder="Ajouter un trello" />
            <button onClick={handleSubmit} className="trello-button">Créer un nouveau trello</button>
            <img  className="tableau" src="https://cdn.pixabay.com/photo/2017/01/12/20/02/an-array-of-1975528_960_720.png" alt="tableau" />
            <hr />
            {containers.map((container, id) => <Container container={container} key={id} />)}
        </div>
    )
}


export default Table;