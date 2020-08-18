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

// friend component looping in jsx 
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

// friend component
class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props;
        return (
            <div>
                <p>This is a friend component</p>
                 <p>{name}</p>
                 <ul>
                     {
                         hobbies.map(m => {
                             return (
                                 <li>
                                     <h2>{m}</h2>
                                 </li>
                             )
                         })
                     }
                 </ul>
            </div>
        )
    }
}

// Adding static props right above the render function
class Hello extends React.Component {
    static defaultProps = {
        from : "Anonymous"
    }
    render() {
        return (
        <div>
            <p>Hi {this.props.to} from {this.props.from}</p>
            <img style={{width: "300px"}} src={this.props.img} />
        </div>
        )
    }
} 
```

Add inline css through passing a object to the style attribute example ....
best practice is to store style in variable at top of the component to clean up the code
class names should be named after the component like 
.Hello 
.Hello-winner 
className={winner ? 'win' : 'lose'} using a ternary operator for dynamic class names
<h1 style={{color: 'red'}}></h1>