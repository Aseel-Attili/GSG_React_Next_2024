import FinalResult from '../FinalResult/FinalResult.component';
import './DisplayResult.css'

interface IProps {
    result: string;
    finalResult: string;
}

const DisplayResult = (props: IProps) => {
    return(
        <div className = 'display'>
            {props.result}
            <FinalResult finalResult = {props.finalResult}/>
            {/*<FinalResultComponent
            و سوف تبعثلها النتيجة الحسابية النهائية ك بروب طبعا لازم تكون عامل بهادالملف لازم تعمل يوزستيت
            لتغيير وتعديل قيمة النتيجة النهائية
            */}
        </div>
    )
}

export default DisplayResult;