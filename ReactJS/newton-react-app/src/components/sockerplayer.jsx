
import React, { Component } from 'react';

class SoccerPlayer extends Component {

    render() {
        return (
            <div>
                <h1>Player Info :- </h1>
                <p>Name :- {this.props.playerName}</p>
                <p>Name :- {this.props.playerProfession}</p>
            </div>

        );
    }
}

export default SoccerPlayer;