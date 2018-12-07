import  './Home.module.scss';
import React from 'react';

export interface IProps {}
interface IState {}

export default class Home extends React.Component < IProps, IState >{
        /**
         * name
         */
        public render(): JSX.Element {
            return (
                <>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </>
            )
        }
}

