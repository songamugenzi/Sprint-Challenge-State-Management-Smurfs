import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Form from './CreateSmurfForm';
import { visitVillage } from '../actions';

const App = props => {
  const fetch = () => props.visitVillage() 

  useEffect(() => {
    props.visitVillage()
  }, [])

  console.log(props)

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
  { visitVillage }
)(App);


