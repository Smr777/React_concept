function ListGroup(){
    let items = [
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one',  
    ];
    // const getMessage = () => {
    //     return items.length === 0 ? <p>no items found</p>: null;
    // } // arrow function syantax
    return (
        <>
            <h1>List Group</h1>
           {/* in and operator we first expression is true and second express is anything like 1,sid,etc the second expression will be displayed and if first expression is false then nothing will be rendered on the screen, therefore we can use this to render dynamically */}
             {/* {getMessage()} we can use different parameters to render different output */}
           {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => 
                <li 
                className="list-group-item" 
                key={item} 
                onClick={(event)=> console.log(item, index, event)}
                >
                {item}
                </li>)}
            </ul> 

        </>
    );
}

export default ListGroup;