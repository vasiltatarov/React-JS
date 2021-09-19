import Card from './Card';

function List(props) {
    return (
        <div>
            {Object.values(props).map(profile => <Card {...profile} />)}
        </div>
    );
}

export default List;