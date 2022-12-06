import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment(by) {
        setCount(count+by);
    }

    function decrement(by) {
        if(count > 0) {
            setCount(count-by);
        }
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h3 className='totalCount'>{count}</h3>
            <div>
                <CounterButton by = {1} inc = {increment} dec = {decrement} />
                <CounterButton by = {2} inc = {increment} dec = {decrement} />
                <CounterButton by = {5} inc = {increment} dec = {decrement} />
            </div>
            <div>
                <button className='resetButton' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}