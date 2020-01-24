import React from 'react';
import './App.css';
import './styles.css';

import { connect } from 'react-redux'; // HOC
import Loader from 'react-loader-spinner';

import { getBeers } from './actions';


function App(props) {
  return (
    <div className="App">
      <button onClick={props.getBeers}>Basic Button</button>
      {!props.beers && !props.isLoading && (<p>^ Click The Button ^</p>)}
      {props.isLoading && (<Loader color="green" height={50} width={50}/>)}
      {props.beers && !props.isLoading && <h1>{props.beers[6].name} - {props.beers[6].tagline}</h1>}
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
    {getBeers}
)(App);