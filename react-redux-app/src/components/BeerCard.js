import React from 'react';

const BeerCard = props => {

    return (
        <div className="card">
            <div className="row-1">
                <div className="btn"><button>+</button></div>
                <div className="pic"><img src={props.beer.image_url} alt={props.beer.name}/></div>
                <div className="stats">
                    <h5>Stats</h5>
                    <p>ABV: {props.beer.abv}</p>
                    <p>IBU: {props.beer.ibu}</p>
                    <p>PH: {props.beer.ph}</p>
                    <h5>Pairings</h5>
                    <p>1. {props.beer.food_pairing[0]}</p>
                    <p>2. {props.beer.food_pairing[1]}</p>
                    <p>3. {props.beer.food_pairing[2]}</p>
                </div>
            </div>
            <div className="row-2">
                <h4>{props.beer.name} - {props.beer.tagline}</h4>
                <p>{props.beer.description}</p>
            </div>
        </div>
    );
};

export default BeerCard;

