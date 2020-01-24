import React from 'react';

const BeerCard = props => {

    return (
        <div className="card">
            <div className="row-1">
                <div className="btn"><button>+</button></div>
                <div className="pic"><img src={props.beer.image_url} alt={props.beer.name}/></div>
                <div className="stats">
                    <h5>Stats</h5>
                    <ul>
                        <li>ABV: {props.beer.abv}</li>
                        <li>IBU: {props.beer.ibu}</li>
                        <li>PH: {props.beer.ph}</li>
                    </ul>
                    <h5>Pairings</h5>
                    <ol type="1">
                        {props.beer.food_pairing.map(item => (
                            <li>{item}</li>
                        ))}
                    </ol>
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

