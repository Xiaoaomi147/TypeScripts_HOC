import  './Login.module.scss';

import React from 'react';
import {  } from 'react-router-dom';
import {History} from 'history';
import RouteEnum from '../../constants/RouteEnum'

export interface IProps {
    history:History
}
export interface IState {}

export default class Login extends React.Component< IProps, IState >{
    login = () => {
    localStorage.setItem('isLogin',JSON.stringify(true));
    this.props.history.push({ pathname: RouteEnum.Home });
    }
    /**
     * name
     */
    public render(): JSX.Element {
        return (
            <>
                <figure className='Login'>
                    <div> 你好啊！ Sir </div>
                    {/* <Prompt
                    when={false}
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                /> */}
                    <div className='span_a'>
                        <button style={{ cursor: 'pointer' }} onClick={this.login}> 登 录 </button>
                        
                    </div>
                    <img className='span_img' width="350" height="234" />
                    
                </figure>
                
            </>
        )
    }

}