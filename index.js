
function getMood(){
    const moods = ['Angry', 'Sad', 'Silly', 'Happy'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render(){
        return (
            <div>
                <h1> My Current Mood is : {getMood()} </h1>
                <img style={{width: '300px'}} src="https://images.unsplash.com/photo-1597694491427-25b7e5c0946e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt=""/>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));