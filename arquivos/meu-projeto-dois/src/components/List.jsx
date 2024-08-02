import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Lamborghini" ano_lancamento={1964} />
                <Item marca="Porsche" ano_lancamento={1992} />
            
            </ul>
        </>
    )
}

export default List;