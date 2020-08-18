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