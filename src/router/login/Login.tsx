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
                <figure>
                    <div> 你好啊！ Sir </div>
                    {/* <p>你好啊</p> */}
                    <div className='span_a'>
                        <Link to={RouteEnum.Home}> 登录 </Link>
                        <Link to={RouteEnum.JSL}> HOOKS </Link>
                    </div>
                    <img className='span_img' width="350" height="234" />
                    
                </figure>
                
            </>
        )
    }

}