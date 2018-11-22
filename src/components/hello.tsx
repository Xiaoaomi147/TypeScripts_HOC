
import * as React from 'react';

export interface Props{
    name: string,
    level?: number
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }

  function Hello ({ name , level = 1 }:Props) {
    if(level <= 0){
        throw new Error('牛逼了')
    }
    return (
        <div>
            Hello {name + getExclamationMarks(level)}
        </div>
    )
}
export default Hello