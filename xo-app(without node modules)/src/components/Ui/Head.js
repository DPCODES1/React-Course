import './Head.css'
function Head(props) {
    return(
        <div>
            <h1>This game is made up of Reactjs</h1>
             {props.children}
        </div>
    )
}


export default Head