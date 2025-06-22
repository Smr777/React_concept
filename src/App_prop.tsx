import ListGroup from './components/props';

function App(){
        let items = [
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one',  
    ];
    const handleSelectItem = (item: string) => {
        console.log(item);}
    return <div><ListGroup items={items} heading="number" // we passed number as static value therefore we are not using {} braces
    onselectItem={handleSelectItem} /></div>;
}

export default App;