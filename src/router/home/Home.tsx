import  './Home.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RouteEnum from '../../constants/RouteEnum';

export interface IProps {}

export default function Home( props:IProps ) {

    const [name, setName] = useState('shifan');

    function handleNameChange( e:any ) {
        setName(e.target.value);
        console.log('name', e.target.value)
    }
    return (
        <>
            <div>< Link to={ RouteEnum.Login }>{name}</Link></div>
            <input onChange={ handleNameChange }></input>
            {/* <input value={ name } /> */}
        </>
    )
}

