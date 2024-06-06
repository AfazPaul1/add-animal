import {useState} from 'react';
import bird from './assets/bird.svg'
import cat from './assets/cat.svg'
import cow from './assets/cow.svg'
import dog from './assets/dog.svg'
import gator from './assets/gator.svg'
import horse from './assets/horse.svg'
import heart from './assets/heart.svg'
import './AnimalShow.css'

//created this object so that  depending on the type we get we can access the corresponding image through object property name cause they same

const svgMap = {
    bird, cat,  cow, dog, gator, horse
}


// const imageSize = 50 * count


function AnimalShow({type}) {
    const [count, setCount] = useState(0)

    const handleImageClick = () => {
    setCount(count+1)
    }
    return(
        <div className='animal-show' onClick={handleImageClick}>
            <img className='animal' src={svgMap[type]} alt="" />
            <img 
                className='heart'
                src={heart} 
                style={{ width: 10 + 10 * count + 'px'}}
                // width={imageSize} height={imageSize} 
            />
        </div>
    )
}
export default AnimalShow