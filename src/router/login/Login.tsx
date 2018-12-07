import  './Login.module.scss';

import React from 'react';

export interface IProps {}
export interface IState {}

export default class Login extends React.Component< IProps, IState >{

    /**
     * name
     */
    public render(): JSX.Element {
        return (
            <>
                <div>Login</div>
            </>
        )
    }

}