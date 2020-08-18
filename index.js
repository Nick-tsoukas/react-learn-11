class App extends React.Component {
    render() {
        return (
        <div>
            < Hello to="Nick" from="Mike" />
        </div>
        )
    }
} 

ReactDOM.render(<App />, document.getElementById('root'));