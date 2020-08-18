class App extends React.Component {
    render() {
        return (
        <div>
          <Hello 
          to="Nick"
          from="John"
          />
          <Hello 
          to="Jerry"
          />
        </div>
        )
    }
} 

ReactDOM.render(<App />, document.getElementById('root'));