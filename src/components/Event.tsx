// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup(){
    let items = [
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one',  
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);

//    const handleClick = (event : MouseEvent)=> console.log(event);

    return (
        <>
            <h1>List Group</h1>
           {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => 
                <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={item} 
                onClick = {() => {setSelectedIndex(index);}}
                // we are passing handleClick reference, not calling it so that means we are telling react whenever user clicks on this event the handleClick function is caught,therefore calling the function is done later at runtime
                >
                {item}
                </li>)}
            </ul> 

        </>
    );
}

export default ListGroup;