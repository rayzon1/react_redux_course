import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';



class Scoreboard extends Component {

  // static propTypes = {
  //   players: PropTypes.array.isRequired
  // };

  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch) ;

    const playerComponents = players.map((player, index) => {
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    })

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard)

// Move to components/Header.js
// ----------------------------------------------


// Move to components/Stats.js
// -----------------------------------------------------------------------


// Move to components/Stopwatch.js
// ------------------------------------------------------------------------


// Move to components/Player.js
// ----------------------------------------------------------------------

// Move to components/Counter.js
// ----------------------------------------------------------
