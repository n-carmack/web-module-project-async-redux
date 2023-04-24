import React from "react";
import { connect } from "react-redux";


const Joke = (props) => {
    const {joke} = props;

    return(<div className="joke">
        <div className="setup">
            {joke.setup}
        </div>
        <div className="punchline">
            {joke.punchline}
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke,
      }
}

export default connect(mapStateToProps)(Joke);