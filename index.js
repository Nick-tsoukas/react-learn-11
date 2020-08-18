function getNumber(){
    return Math.floor(Math.random() * 100);
}

class NumPicker extends React.Component {
    render() {
        return (
            <h1>Your number is .... { getNumber() }</h1>
        )
    }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'));