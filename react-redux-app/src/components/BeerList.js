import React from 'react';

import BeerCard from './BeerCard';

const BeerList = props => {
    return (
        <div className="content">
            {props.state.beers.length ? ( //greater than 0? [0 = falsy]
                <div>
                    {props.state.beers.map(item => (
                        <BeerCard key={item.id} beer={item} dispatch={props.dispatch} />
                    ))}
                </div>
            ) : (
                <a href="https://aa.org/">You've Taken All Of Our Beer</a>
            )}
        </div>
    );
};

export default BeerList;
