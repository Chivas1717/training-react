
// @ts-ignore
import React, {useEffect, useLayoutEffect, useState} from 'react'

const NewCounter: React.FC = function() {
    const [count, setCount] = useState(0)
    // const inputRef = useRef<HTMLInputElement | null | number>(null);
    const [inputValue, setInputValue] = useState(0);

    // asynchronously does computations after drawing new DOM
    useEffect(() => {
        console.log('effect')
        console.log(count)

    },[count])

    // waits for all computations and then draw new DOM
    useLayoutEffect(() => {
        console.log('layout')
        console.log(count)
        // for(let i: number = 0; i < 1000000000; i++) {
        //     if(i % 10000000 === 0) console.log(i)
        // }
    }, [count])

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + inputValue)}>Add number:</button>
            <input value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(+e.target.value)}/>
            <>{console.log(123)}</>
        </>
    )
}

export default NewCounter;
