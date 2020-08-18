class Hello extends React.Component {
    static defaultProps = {
        from : "Anonymous"
    }
    render() {
        return (
        <div className="Hello">
            <p style={{color: 'red'}}>Hi {this.props.to} from {this.props.from}</p>
        </div>
        )
    }
} 