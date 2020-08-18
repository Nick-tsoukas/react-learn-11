function getNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        let num = getNumber();
        return (
            <div>
            <h1>Your number is .... { num }</h1>
            <p>{num === 7 ? 'Congrats you got the lucky number': 'Sorry your number is unlucky'}</p>
            </div>
        )
    }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'));