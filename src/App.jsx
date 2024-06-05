import {useState} from 'react'

const animals=["dog", "cat", "cow", "pig", "horse"]

function randomAnimals() {
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {


// const [count, setCount] = useState(0)
// const buttonClicked = (e) => {
//     //  console.log(`button clicked`);
//     setCount(count+1)
// }
// console.log(useState(6) )

//array of animals


const [animals, setAnimals] = useState([])

const buttonClicked = () => {
    setAnimals([...animals, randomAnimals()])
}


    return (
        <div>
            <button type="button" onClick={buttonClicked}>Add Animal</button>
            <p>{animals}</p>
            {/* <p>{count}</p> */}
        </div>
    )

}
export default App