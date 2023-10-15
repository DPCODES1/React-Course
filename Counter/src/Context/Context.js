import { createContext ,useState} from "react";
export const counter = createContext({
    increment:() => {},
    decrement:() => {},
    count:0
})
function Context(props) {
    const [count,setCount] = useState(0)

    function increment() {
        console.log('hi')
        setCount((pre)=> pre + 1)
    }

    function decrement() {
        setCount((pre)=> pre-1)
    }

    return <counter.Provider value={{increment:increment,decrement:decrement,count:count}}>
         {props.children}
    </counter.Provider>
}

export default Context