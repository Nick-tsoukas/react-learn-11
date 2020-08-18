class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs);
        console.log(this.props)
        return (
        <div>
            <p>Hi {this.props.to} from {this.props.from} {bangs}</p>
            <img style={{width: "300px"}} src={this.props.img} />
        </div>
        )
    }
} 