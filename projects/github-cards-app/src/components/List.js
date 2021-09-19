import Card from './Card';

function List(props) {
    return (
        <>
            <hr />
            <Card {...props[0]} />
            <Card {...props[1]} />
        </>
    );
}

export default List;