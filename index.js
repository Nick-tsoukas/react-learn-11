class JSXDemo extends React.Component {
    render(){
        return (
            <div>
                <h1>This is the demo component</h1>
                <img style={{width: '300px'}} src="https://images.unsplash.com/photo-1597694491427-25b7e5c0946e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt=""/>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));