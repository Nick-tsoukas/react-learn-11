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
// note on props props are immutable
//  props are used to configure your components
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


#### simple unstyled slot machine game
```javascript 
let msg = '';
function checkWin(symbols){
    let count = 0;
    for( let i=0; i<symbols.length -1; i++) {
        if(symbols[i] !== symbols[i + 1]) {
            count++;
        }
    }
    if(count > 0) {
        msg = <h1>Sorry you lost the game</h1>
    } else {
        msg = <h1>You are a winner!!!</h1>
    }
   
}
class Slot extends React.Component {
  render() {
      return (
          <div>
              <p>{this.props.s1} {this.props.s2} {this.props.s3} {checkWin([this.props.s1,this.props.s2, this.props.s3])}</p>
              {msg}
          </div>
      )
  }
} 
```