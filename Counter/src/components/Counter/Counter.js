import { useEffect, useState ,useContext} from 'react'
import { counter } from '../../Context/Context'
import './Counter.css'
function Counter() {
    const datas = useContext(counter)
    // const [count,setCount] = useState(0)
    // // console.log("From normal Execution")
    // useEffect(()=> {
    //     console.log('This is from useEffect')
    //     const timeoutId = setTimeout(()=> {
    //        console.log('hi')
    //     },5000)

    //     return () => {
    //         console.log('This is From cleanup')
    //         clearTimeout(timeoutId)
    //     }
    // },[count])
    function call() {
        setCount((prev)=> prev + 1)
    }
   return (
    <div className='counter'>
        <h2>{datas.count}</h2>
        <button onClick={()=> {datas.increment()}}>Increment by One</button>
    </div>
   )
}

export default Counter