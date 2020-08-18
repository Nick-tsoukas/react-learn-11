class App extends React.Component {
    render() {
        return (
        <div>
            <h1>The Slot Machine</h1>
            <Slot s1="x" s2="y" s3="y" />
            <Slot s1="x" s2="y" s3="y" />
            <Slot s1="x" s2="x" s3="x" />
        </div>
        )
    }
} 

ReactDOM.render(<App />, document.getElementById('root'));