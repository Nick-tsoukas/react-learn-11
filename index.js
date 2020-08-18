class App extends React.Component {
    render() {
        return (
        <div>
           <h1>Friend App</h1>
           < Friend
           name="nick"
           hobbies={['Running', 'Reading', "Swimming"]}
            />
            <Friend
            name="Mike"
            hobbies={['Gaming', 'Hiking']}
            />
        </div>
        )
    }
} 

ReactDOM.render(<App />, document.getElementById('root'));