/*
 * @Author: shifan
 * @Date: 2018-11-21 17:21:41
 * @Last Modified by: shifan
 * @Last Modified time: 2018-11-22 18:24:11
 * @功能: {}
 */

import * as React from 'react';
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
interface Props {
    name: string;
    level?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
interface State {
    item: number;
}
class Hello2 extends React.Component<Props, State> {
    render() {
        const { name, onIncrement, onDecrement, level = 1 } = this.props;
        if (level <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div>
                {`Hello ${name + getExclamationMarks(level)}`}
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }

}
export default Hello2