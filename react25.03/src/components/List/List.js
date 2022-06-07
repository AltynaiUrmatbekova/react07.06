import "./List.css";

function List(props) {
    const list = props.src.map(item => <li>{item}</li>)
    return (
        <ul className="List">{List}</ul>
    )
}

export default List;