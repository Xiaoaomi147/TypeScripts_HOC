/*
 * @Author: shifan
 * @Date: 2018-11-21 17:21:41
 * @Last Modified by: shifan
 * @Last Modified time: 2018-11-21 18:21:05
 * @功能: {}
 */

 import * as React from 'react';
 function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }
 interface Props{
    name: string,
    level?: number
}
interface State {
    item: number
}
 class Hello2 extends React.Component<Props, State> {
     constructor(props: Props){
        super(props)
        this.state = {
            item: props.level || 1
        }
     }
     updateEnthusiasm (item: number) {this.setState({item}) }
     onIncrement = () => this.updateEnthusiasm(this.state.item + 1);
     onDecrement = () => this.updateEnthusiasm(this.state.item - 1);
    render(){
    const { name } = this.props;
    const { item } = this.state;
    if (item <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
        return (
            <div>
                {`Hello TypeScripts ${name + getExclamationMarks(item)}`}
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
    
 }
 export default Hello2