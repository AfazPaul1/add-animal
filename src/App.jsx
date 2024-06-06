import {useState} from 'react'
import AnimalShow from './AnimalShow'  
import './App.css'

const animals=["dog", "cat", "cow", "gator", "horse", "bird"]

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

const renderedAnimals = animals.map(
    (ani, i) => {
        return <AnimalShow type={ani} key={i}/>
    }
)


    return (
        <div className='app'>
            <button type="button" onClick={buttonClicked}>Add Animal</button>
            {/* <p>{animals}</p> */}
            {/* <p>{count}</p> */}
            {/* <AnimalShow type={animals} /> */}
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}
export default App