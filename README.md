# react-learn-11

Relearning the basics of jsx in react 
    - embeding expressions { this can take funcitons expressions and conditional logic }


#### simple lucky number component

```javascript 
function getNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        let num = getNumber();
        return (
            <div>
            <h1>Your number is .... { num }</h1>
            <p>
            {
                num === 7 && 
                <img src="https://images.unsplash.com/photo-1597694491427-25b7e5c0946e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            }
            </p>
            </div>
        )
    }

}
```

#### variation simple lucky number with image and conditional logic 

```javascript
class NumPicker extends React.Component {
    render() {
        let num = getNumber();
        let msg;
        if(num === 7) {
            msg = 
            <div>
                <h1>You got the lucky number</h1>
                <img style={{width: '300px'}} src="https://images.unsplash.com/photo-1597694491427-25b7e5c0946e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt=""/>
            </div>
        } else {
            msg = 
            <h1>Sorry you lost the game</h1>
        }
        return (
            <div>
            <h1>Your number is .... { num }</h1>
            {msg}
            </div>
        )
    }
}

```

#### simple props example 

```javascript 
class Hello extends React.Component {
    render() {
        console.log(this.props)
        return (
        <div>
            <p>Hi {this.props.to} from {this.props.from}</p>
        </div>
        )
    }
} 
```