import { useState } from "react";
import './Polynomial.css';

function Polynomial() {

    const [coef, setCoef] = useState("");
    const [expo, setExpo] = useState("");
    const [ans, setAns] = useState([]);
    const [x, setX] = useState(0);
    const [ans2, setAns2] = useState("Press Calculate");

    function calculate(event) {
        event.preventDefault();

        const coefficients = coef.split(", ");
        const exponents = expo.split(", ");

        let fx = ["f(x) = ", 0];

        for (let i = 0; i < coefficients.length; i++) {

            if (exponents[i] == 0) {
                fx[0] += coefficients[i];
            } else if (exponents[i] == 1) {
                fx[0] += coefficients[i] + "x";
            } else {
                fx[0] += coefficients[i] + "x^" + exponents[i];
            }

            if (i != coefficients.length - 1 && coefficients[i + 1] >= 0) {
                fx[0] += " + ";
            } else {
                fx[0] += " ";
            }
        }
        coefficients.forEach((item, index) => {
            fx[1] += item * (x ** exponents[index]);
        })

        setAns(fx[0]);
        setAns2(fx[1]);

    }

    return (
        <div>
            <form onSubmit={(event) => calculate(event)}>
                <h1>Polynomial Function</h1>
                <label>Coefficients:</label>
                <input type="text" value={coef} onChange={(event) => { setCoef(event.target.value) }} required />
                <label>Exponents:</label>
                <input type="text" value={expo} onChange={(event) => { setExpo(event.target.value) }} required />
                <label>x Value:</label>
                <input type="number" value={x} onChange={(event) => { setX(event.target.value) }} required />
                <label>Polynomial Function (Result):</label>
                <input type="text" value={ans} onChange={(event) => { setAns(event.target.value) }} readOnly />
                <label>Polynomial Evaluation (Result):</label>
                <input type="text" value={ans2} onChange={(event) => { setAns2(event.target.value) }} readOnly />
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Polynomial