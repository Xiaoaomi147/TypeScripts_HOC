import  './Login.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import RouteEnum from '../../constants/RouteEnum'

export interface IProps {}
export interface IState {}

export default class Login extends React.Component< IProps, IState >{

    /**
     * name
     */
    public render(): JSX.Element {
        return (
            <>
                <div><Link to={RouteEnum.Home}>Go To Home</Link></div>
            </>
        )
    }

}