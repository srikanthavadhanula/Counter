import './Counter.css'

export default function CounterButton({by,inc,dec}) {

    return(
        <div>
                <button className="counterButton" onClick={() => {inc(by)}}>+{by}</button>
                <button className="counterButton" onClick={() => {dec(by)}}>-{by}</button>
        </div>
    )
}