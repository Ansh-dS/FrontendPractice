import React from 'react'; 
import img from '../Images/test.png'

import './Home1.css'; 
function Home1(props) {
   
    return (
        //all components inside this one. 
        <div className='wrapper'>
            {/*first component*/}
            <h1><b>Home Component </b></h1>
            {/*second component */}
            <div className="shopping">
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src={img} className='reactLogoImage' style={{width:"10rem"}} alt="can't find react logo" />
                    </div>
                    <div  className="text-wrapper-item">
                        <span className='span'>
                            Name: ReactLogo
                        </span>
                        <br />
                        <span className='span'>
                            Price: $1000
                        </span>
                    </div>
                    <br /><br />
                    <div className="btn-wrapper item">
                        <button
                         onClick={()=> props.addToCartHandler({name:"Anshdeep",class:"12"})} 
                        >Add To Cart</button>
                    </div>
                    <div className="btn-wrapper item">
                        <button
                         onClick={()=> props.removeFromCartHandler()} 
                        >Remove from Cart</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Home1; 

