import './index.css'
import Panel from '../Panel'

export default function CIEvent({
    type='info',
    text
}) {
    return (
        <Panel className="cievent">
            <div className='icon'>
                <img src={`/images/event-icons/${type}.svg`} alt="" />
            </div>

            <div className='text'>
                {
                    type === 'harvest' ?
                        <h3>Harvesting</h3>
                    :
                        null
                }
                {text}
            </div>
        </Panel>
    );
}