import { useState } from 'react'
import './Herons.css'

function Herons() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [area, setArea] = useState("Press Calculate");

    function calculate(event) {
        event.preventDefault();
        const sa = a * a;
        const sb = b * b;
        const sc = c * c;
        const comb = sa + sb - sc;
        setArea(0.25 * Math.sqrt(4 * sa * sb - comb * comb))
    }

    return (
        <div>
            <form onSubmit={(event) => calculate(event)}>
                <h1>Heron's Formula</h1>
                <label>Side a:</label>
                <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} min="0" required />
                <label>Side b:</label>
                <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} min="0" required />
                <label>Side c:</label>
                <input type="number" value={c} onChange={(event) => { setC(event.target.value) }} min="0" required />
                <label>Area (Result):</label>
                <input type="text" value={area} readOnly />
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Herons