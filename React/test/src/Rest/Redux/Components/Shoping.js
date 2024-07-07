import img1 from '../Images/grocery-store.png'; 
import './Shoping.css'

export default function Shoping(props){
    return (
        <div>
            <span className='numberOfItems'>{Number(props.insideValues.items.array.length)}</span>
            <img  className='shopingTorlleyImage' src={img1}  alt="can't find shoping troll" />
        </div>
    )
}