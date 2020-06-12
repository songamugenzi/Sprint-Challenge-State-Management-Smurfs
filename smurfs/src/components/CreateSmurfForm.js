import React, { useState } from 'react'
import { buildVillage } from '../actions'
import { connect } from 'react-redux'

const Form = props => {

    const [newSmurfInfo, setNewSmurfInfo] = useState({
        name: '',
        age: 0,
        height: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        props.buildVillage(newSmurfInfo)
    };

    const handleChanges = (e) => {
        setNewSmurfInfo({
            ...newSmurfInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form className='create-villager'>
            <input
                type='text'
                className='newborn'
                name='name'
                value={newSmurfInfo.name}
                onChange={handleChanges}
            />

            <input
                type='text'
                className='newborn'
                name='age'
                value={newSmurfInfo.age}
                onChange={handleChanges}
            />

            <input
                type='text'
                className='newborn'
                name='height'
                value={newSmurfInfo.height}
                onChange={handleChanges}
            />


            <button onClick={handleSubmit}>Create a new villager!</button>
        </form>
    )
}
export default connect(
    null,
    { buildVillage }
)(Form);