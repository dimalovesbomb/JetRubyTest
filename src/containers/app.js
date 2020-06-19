import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/board';

import {chooseColor, checkOpened, checkGuessed} from '../actions/';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.chooseColor(id);
    this.props.checkOpened();
    this.props.checkGuessed();
  }

  render() {
    return (
        <Board cards={this.props.cards}
               handleClick={this.handleClick}
        />
    )
  }
}


function mapStateToProps(state) {
  return {
    cards: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    chooseColor: id => dispatch(chooseColor(id)),
    checkOpened: () => dispatch(checkOpened()),
    checkGuessed: () => dispatch(checkGuessed())
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
