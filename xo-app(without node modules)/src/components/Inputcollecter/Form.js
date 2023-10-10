import { useState } from 'react'
import './Form.css'

function Form(props) {
    let name = ''
    let box = props.selectedBox
    function nameCollector(event) {
        console.log(event)
        name = event.target.value
    }

    function dataTransferToMain(event) {
        event.preventDefault()
        if(name.length === 0) {
            alert('Please input a valid name')
            return
        }
        event.target[0].value= ''
        const data = {name:name,selectedbox:box}
        props.dataCollector(data)
    }

    function close(event) {
        props.cickOpener('none')
        event.target.form[0].value = ''
    }


     return(
        <div id='backdrop' style={{display:props.display}}>
            <form onSubmit={dataTransferToMain}>
            <label htmlFor="name">Player Name</label>
            <input type="text" name="name" id='name' onChange={nameCollector}></input>
            <div id='button-container'>
                <button type='submit'>Submit</button>
                <button type='reset' id='cancel' onClick={close}>Cancel</button>
            </div>
        </form>
        </div>
     )
}

export default Form