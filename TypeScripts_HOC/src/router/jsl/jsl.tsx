import './jsl.module.scss';
import React from 'react';
 export interface IProps {}

 export default function JSL(props:IProps){
    const array =  ['lk','it','ka','pq','ri','es','pr','av','lu','qg','tw','er','ol','fm','hb','nh','uq','wi','tb','gk'];
    return (
        <div className="testWarp">
        <div className="testGrid">
            {array.map ((val:string,ind:any)=><div key={`${ind++}`} className={`item-${ind++}`} ><p>{ind+1}</p> <div> { val }</div> </div>)}
        </div>
        </div>
    )
}
