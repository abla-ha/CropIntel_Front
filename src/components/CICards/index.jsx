import Panel from '../Panel';
import './index.css'

export default function CICards({
    title,
    image,
    size,
    text,
    className=''
}) {
    return (
        <Panel className={"cicards " + className}>
            <img src={image} alt={title} />
            <br />
            <br />
            <div>
                <h2>{title}</h2>
                <p>{size}</p>
            </div>
            <p>
                {text}
            </p>
        </Panel>
    );
}