import { useState } from 'react'
import './Ambiguous.css'

function Ambiguous() {
    const [angle, setAngle] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [ans, setAns] = useState("Press Calculate");

    function calculate(event) {
        const h = b * Math.sin((angle * (Math.PI / 180)));
        event.preventDefault();
        if (angle == 0) {
            return "No triangle";
        } else if (angle < 90) {
            if (a >= b) {
                setAns("One triangle");
            } else if (a < h) {
                setAns("No triangle");
            } else if (a == h) {
                setAns("Right Triangle");
            } else {
                setAns("Two Triangles (Ambiguous Case)");
            }
        } else if (angle == 90) {
            setAns("Right Triangle");
        } else if (angle < 180) {
            if (a <= b) {
                setAns("No triangle");
            } else {
                setAns("One triangle");
            }
        }
    }

    return (
        <div>
            <form onSubmit={(event) => calculate(event)}>
                <h1>Ambiguous Case</h1>
                <label>Angle A:</label>
                <input type="number" value={angle} onChange={(event) => { setAngle(event.target.value) }} min="0" max="180" required />
                <label>Side a:</label>
                <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} min="0" required />
                <label>Side b:</label>
                <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} min="0" required />
                <label>Triangle Type (Result):</label>
                <input type="text" value={ans} readOnly />
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Ambiguous