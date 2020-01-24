import React from 'react';
import './App.css';
import './styles.css';

import BeerList from './components/BeerList';

import { connect } from 'react-redux'; // HOC
import Loader from 'react-loader-spinner';

import { getBeers, removeBeer } from './actions';


function App(props) {
  return (
    <div className="App">
      <button onClick={props.getBeers}>Summon The Beers!!!</button>
      {props.isLoading && (<Loader color="green" height={50} width={50}/>)}
      {props.beers && !props.isLoading && <BeerList state={{beers: props.beers, isLoading: props.isLoading, error: props.error}} dispatch={props.removeBeer}/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    beers: state.beers,
    error: state.error
  };
};

export default connect(
    mapStateToProps,
    {getBeers, removeBeer}
)(App);
