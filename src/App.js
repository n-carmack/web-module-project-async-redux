import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { fetchJokes } from './actions/actions';
import Joke from './Components/joke';

function App(props) {

  const {loading, error, fetchJokes} = props;

  useEffect(() => {
    fetchJokes();


  }, []);

  const handleJokeClick = (e) => {
    e.preventDefault();
    props.fetchJokes();
  }
  return (
    <div className="App">
      <h2>Joke Time</h2>
      <button onClick={handleJokeClick} className='jokeButton'>New Joke</button>
      { loading ? <h3>loading a joke, please wait</h3> : <Joke/>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}
//https://official-joke-api.appspot.com/random_joke//
export default connect(mapStateToProps, { fetchJokes })(App);