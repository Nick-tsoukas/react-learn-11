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