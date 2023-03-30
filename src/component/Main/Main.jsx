import React, { useEffect, useState } from 'react';
import './Main.css';

const Main = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('../../fakeData/cards.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div className='main-container'>
            <div className="cards-container">
                {
                    
                }
            </div>
            <div className="bookmarked">
                <p>arafat hossen</p>
            </div>
        </div>
    );
};

export default Main;