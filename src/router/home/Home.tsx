import  './Home.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import RouteEnum from '../../constants/RouteEnum'

export interface IProps {}
interface IState {}

export default class Home extends React.Component < IProps, IState >{
        /**
         * name
         */
        public render(): JSX.Element {
            return (
                <>
                    <div>< Link to={ RouteEnum.Login }>Go To Login</Link></div>
                </>
            )
        }
}

