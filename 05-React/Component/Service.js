import React from 'react'
import { useEffect, useState } from 'react';

const Service = () => {

    useEffect(() => {
        FetchData();
    }, [])

    const [List, setList] = useState([]);

    const FetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7298119&lng=77.1654121&restaurantId=240669&catalog_qa=undefined&submitAction=ENTER")

        const JSON = await data.json();

        setList(JSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    }

    console.log(List);

    if (List.length == 0) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
        )
    }


    return (
        // <div>
        // {List.map((cards) => <div key={cards.card.info.id}>{cards.card.info.name}</div>)}
        // </div>

        <div>
            {
                List.map((cards) =>
                    <div className="card" key={cards.card.info.id}>
                        <div className="card-content">
                            <h2 className="card-title">{cards.card.info.name}</h2>
                            <p className="card-description">{cards.card.info.description}</p>
                            <div className="card-details">
                                <span className="card-rating">Rating: {cards.card.info.ratings.aggregatedRating.rating}⭐</span>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=" />
                        </div>
                    </div>
                )

            }
        </div>

    )
}

export default Service