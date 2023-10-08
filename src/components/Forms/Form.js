import './Form.css'
import { useEffect, useState } from 'react'
import List from '../Listgenerator/List';
function Form() {
    const [initialState, stateChangerfn] = useState([])
    const [userAdded, userAddedFn] = useState(true)
    useEffect(() => {
        async function fetcher() {
            const fetchedData = await fetch("https://example-demo-46365-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
            const responseData = await fetchedData.json()
            if(responseData) {
                stateChangerfn(responseData)
                userAddedFn(false)
            }
        }
        fetcher()
    }, [])
    async function submitHandler(eve) {
        userAddedFn(false)
        eve.preventDefault();
        if (!eve.target[0].value.trim()) {
            alert("Please give a Valid name")
            return
        }
        stateChangerfn((prevState) => {
            return [...prevState, eve.target[0].value]
        })
        const postedData = await fetch('https://example-demo-46365-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
            method: 'PUT',
            body: JSON.stringify([...initialState,eve.target[0].value]),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!postedData.ok) {
            alert('Given input is not sent to backend')
            return
        }
        // console.log(fetchData.ok)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" name="username"></input>
                <button type="submit">Submit</button>
            </form>
            {userAdded ? '' : <List data={initialState}></List>}
        </div>
    )
}

export default Form

