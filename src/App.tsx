import ListGroup from './components/ListGroup';

function App() {
    let items = [
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one',  
    ];
    return <div>
        <ListGroup items={items} heading="number" onselectItem={(item) => console.log(item)} />
        {/* <Alert>
            alert message
            <p>you directly write the message here when you use children prop, in this case as a string</p>
        </Alert> */}
    </div>;
}

export default App;
