import './Card.css';

function Card(props) {
    return (
        <div className="github-profile">
            <img src={props.image} />
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="company">{props.company}</div>
            </div>
        </div>
    );
}

export default Card;