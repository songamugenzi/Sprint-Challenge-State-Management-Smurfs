import React from "react";
import { connect } from 'react-redux';
import Form from './CreateSmurfForm';

const App = props => {

  return (
    <div className="App">
      <Form />
      <ul>

        {
          props.villagers.map((smurf, idx) => {
            return (
              <li key={idx}>
                {smurf.name}
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    villagers: state.villagers
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);


