import  './Home.module.scss';
import React from 'react';
import io from 'socket.io-client';


export interface IProps {}
interface IState {
    data: string
}
let Socketss =  io.connect(`http://127.0.0.1:8082`);
export default class Home extends React.Component< IProps, IState >{
    state = {
        data:'',
    }
   componentDidMount(){
        this.xcvb();
   }
   xcvb = () => {
        Socketss.on('getMsg',(data: any)=>{
            console.log('服务端发送的内容：',data)
        })
        
        Socketss.emit('werty',  "" );
        Socketss.on('emittime',(data: any)=>{
            this.setState({data:data.time})
            Socketss.emit('gettime', data)
        })
        
   }
    sasa = () => {
        Socketss.emit('send',  "your message" );
        
    }
    disconnect = () => {
        Socketss.emit('disconnect', function() {
            console.log("与服务其断开");
        });
    }
    
    
    render(){
        return (
        <>
            <button onClick={ this.sasa }>click me</button>
            <button onClick={ this.disconnect }> disconnect</button>
            {this.state.data}
        </>
    )
    }
    
}

