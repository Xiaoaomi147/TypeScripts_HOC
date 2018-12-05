/*
 * @Author: shifan
 * @Date: 2018-11-21 17:21:41
 * @Last Modified by: shifan
 * @Last Modified time: 2018-12-05 18:24:56
 * @功能: {}
 */

import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
interface Props {
    name?: string;
    level?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
interface State {
    item: number;
}
export class Hello2 extends React.Component<Props, State> {
    
    public render(): JSX.Element {
            const { name, onIncrement, onDecrement, level = 1 } = this.props;
            if (level <= 0) {
                throw new Error('You could be a little more enthusiastic. :D');
            }
            return (
                <>
                    <CssBaseline />
                    {`Hello ${name + getExclamationMarks(level)}`}
                    <Button variant="contained" color="primary" onClick={onIncrement}>+</Button>
                    <Button variant="contained" color="primary" onClick={onDecrement}>-</Button>
                </>
            )
        }

}