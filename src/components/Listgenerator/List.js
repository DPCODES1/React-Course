import './List.css'

function List(props) {
    return (
        <ul>
            {props.data.map((val,idx)=> {
                return <li key={idx}>{val}</li>
            })}
        </ul>
    )
}

export default List