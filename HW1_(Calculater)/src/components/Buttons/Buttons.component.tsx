import './Buttons.css'

interface IProps {
    onDisplayChange: (input: string) => void;
}

const Buttons = (props: IProps) => {

    const display = (e: any) => {
        //console.log(e.target.textContent);
        const buttonText = e.target.textContent;
            switch(buttonText) {
                case '1':
                    props.onDisplayChange('1');
                    break;
                case '2':
                    props.onDisplayChange('2');
                    break;
                case '3':
                    props.onDisplayChange('3');
                    break;
                case '4':
                    props.onDisplayChange('4');
                    break;
                case '5':
                    props.onDisplayChange('5');
                    break;
                case '6':
                    props.onDisplayChange('6');
                    break;
                case '7':
                    props.onDisplayChange('7');
                    break;
                case '8':
                    props.onDisplayChange('8');
                    break;
                case '9':
                    props.onDisplayChange('9');
                    break;
                case '0':
                    props.onDisplayChange('0');
                    break;
                case '+':
                    props.onDisplayChange('+');
                    break;
                case '-':
                    props.onDisplayChange('-');
                    break;
                case '=':
                    props.onDisplayChange('=');
                    break;
            }
    }

    return (
        <div className = "controls">
            <button className="btn blueBtn" onClick = {display}>1</button>
            <button className="btn blueBtn" onClick = {display}>2</button>
            <button className="btn blueBtn" onClick = {display}>3</button>
            <button className="btn blueBtn" onClick = {display}>4</button>
            <button className="btn blueBtn" onClick = {display}>5</button>
            <button className="btn blueBtn" onClick = {display}>6</button>
            <button className="btn blueBtn" onClick = {display}>7</button>
            <button className="btn blueBtn" onClick = {display}>8</button>
            <button className="btn blueBtn" onClick = {display}>9</button>
            <button className="btn blueBtn" onClick = {display}>0</button>
            <button className="btn operation" onClick = {display}>+</button>
            <button className="btn operation" onClick = {display}>-</button>
            <button className="btn equals" onClick = {display}>=</button>
        </div>
    )
}

export default Buttons;