import { useState } from "react";

interface ListProps {
    items: string[];
    heading: string;
    // we are using type annotation here to specify the type of items and headings
    onselectItem: (item: string) => void; // this is a function that takes a string and returns void and we are passing function as a prop therefore making the function reusable
}

function ListGroup({items, heading, onselectItem}: ListProps) {
    //const { items, heading } = props; this happens when we destructure props with array to directly access the value in it
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
           {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => 
                <li 
                className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                key={item} 
                onClick = {() => {
                    setSelectedIndex(index);
                    onselectItem(item); // this is the function that we passed from App.tsx
                }}
                >
                {item}
                </li>)}
            </ul> 

        </>
    );
}

export default ListGroup;