import './index.css'

export default function CIProgress({
    value = 0,
    max = 100,
    min = 0,
    indicatorColor='rgba(49, 159, 67, 1)',
    backgroundColor='rgba(245, 245, 245, 1)'
}) {

    const progressWidth = (value * 100) / max; 
    return (
        <div className={"ciprogress"} style={{backgroundColor}}>
            <div className={'indicator'} style={{
                width: `${progressWidth}%`,
                backgroundColor: indicatorColor
            }}></div>
        </div>
    );
}