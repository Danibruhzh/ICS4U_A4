import { useState } from 'react'
import './Herons.css'

function Herons() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [area, setArea] = useState("Press Calculate");

    function heron(event) {
        event.preventDefault();
        const sa = a*a;
        const sb = b*b;
        const sc = c*c;
        const comb = sa + sb - sc;
        setArea(0.25 * Math.sqrt(4 * sa * sb - comb * comb))
        // return 0.25 * Math.sqrt(4 * sa * sb - comb * comb);
    }

        return (

            <form onSubmit={(event) => heron(event)}>
                <h1>Heron's Formula</h1>
                <label>Side a:</label>
                <input type="number" value = {a} onChange={(event) => { setA(event.target.value) }} min="0" required />
                <label for="Side b">Side b:</label>
                <input type="number" value = {b} onChange={(event) => { setB(event.target.value) }} min="0" required />
                <label for="Side c">Side c:</label>
                <input type="number" value = {c} onChange={(event) => { setC(event.target.value) }} min="0" required />
                <label for="result">Area (Result):</label>
                <input type="text" value = {area} readonly />
                <button id="heron-button">Calculate</button>
            </form>
        )
    }


export default Herons