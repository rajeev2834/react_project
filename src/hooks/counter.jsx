import React, {useState, Fragment} from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useDocumentTitle(`${name} clicked ${count} times`);

    return (
        <Fragment>
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {name} with Counter : {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        </Fragment>
    );
}

export default Counter;