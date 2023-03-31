import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Main.css';

const Main = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    
    return (
        <div className='main-container'>
            <div className="cards-container">
                {
                    cards.map(card=>
                        <Card
                        key={card.id}
                        cade = {card}
                        ></Card>    
                    )
                }
            </div>
            <div className="bookmarked">
                <p>arafat hossen</p>
            </div>
        </div>
    );
};

export default Main;