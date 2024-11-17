import { useState } from "react";
import './Newtons.css'

function Newtons() {

    const [x, setX] = useState(0);
    const [ans, setAns] = useState("Press Calcluate");

    function calculate(event) {
        event.preventDefault();
        const fx = (f) => {
            return 6 * f ** 4 - 13 * f ** 3 - 18 * f ** 2 + 7 * f + 6;
        }

        const dfx = (f) => {
            return 24 * f ** 3 - 39 * f ** 2 - 36 * f + 7;
        }

        let temp1 = x;
        let temp2 = temp1 - fx(temp1) / dfx(temp1);
        while (Math.abs(temp2 - temp1) > 0.0001) {
            temp1 = temp2;
            temp2 = temp1 - fx(temp1) / dfx(temp1);
        }
        setAns(temp1.toFixed(3));
    }

    return (
        <div>
            <form onSubmit={(event) => calculate(event)}>
                <h1>Newton's Method</h1>
                <label>Root Guess:</label>
                <input type="number" value={x} onChange={(event) => { setX(event.target.value) }} required />
                <label>Root Approximation (Result):</label>
                <input type="text" value={ans} onChange={(event) => { setAns(event.target.value) }} readOnly />
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Newtons