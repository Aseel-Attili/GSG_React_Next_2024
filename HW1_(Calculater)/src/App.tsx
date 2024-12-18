import './App.css';
import {useState} from 'react';
import Buttons from './components/Buttons/Buttons.component';
import DisplayResult from './components/DisplayResult/DisplayResult.component';

/*
- App component is The Parent cmponen that has two direct children:
DisplayResult component and Buttons component.

- The Buttons component sends data or trigers events to App component, so if we want to send data
from child component(Buttons) to parent component(App) we must use event.(I named it onDisplayChange)

- Because of the entered numbers and final result change frequently, so it will be rerendered more times
so i created a useState for the entered numbers(0-9 and + and - and =) and we named it result, and 
i created another useState for the final result that comes after (=) named finalResult. So App component
will manage that two states and send them to the DisplayResult component via props.

- The DisplayResult component is a parent of a FinalResult component, accepts result and finalResult and
send the finalResult to the FinalResult component via props.
*/
function App() {

  const [result, setResult] = useState<string>('');
  const [finalResult, setFinalResult] = useState<string>('');

  const handleDisplayChange = (input: string): void => {
    //console.log(input);
    if(input === '=') {

      try{
        let fResult = eval(result);
        if(fResult == undefined){
          setResult('undefined');
          setFinalResult('');
        }
        else if(result == 'Error'){
          setResult('0');
          setFinalResult('');
        }
        else if(result == '0'){
          setResult('0');
          setFinalResult('');
        }
        else {
          setResult(prevVal => prevVal + ' ' + input + ' ');
          setFinalResult(fResult);
        }
      }
      catch{
        setResult('Error');
        setFinalResult('');
      }

    }
    else {
      setResult(result + input);
    }

  }
  return (
    <div className = "wrapper">
      <DisplayResult result = {result} finalResult = {finalResult}/>
      <Buttons onDisplayChange = {handleDisplayChange}/>
    </div>
  )
}

export default App;
