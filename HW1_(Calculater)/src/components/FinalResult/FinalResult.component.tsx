import './FinalResult.css'

interface IProps {
    finalResult: string;
}

const FinalResult = (props: IProps) => {
    return (
        <span className = "finalResult">{props.finalResult}</span>
    )
}

export default FinalResult;