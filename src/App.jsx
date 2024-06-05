import {useState} from 'react'
function App() {


const [count, setCount] = useState(0)
const buttonClicked = (e) => {
    //  console.log(`button clicked`);
    setCount(count+1)
}
console.log(useState(6) )
    return (
        <div>
            <button type="button" onClick={buttonClicked}>Add Animal</button>
            <p>{count}</p>
        </div>
    )

}
export default App