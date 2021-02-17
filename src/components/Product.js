export default function Product(props){
    const {product, onAdd} = props;
    return(
        <div className={'block'}>
            <img className={'small'} src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>{product.price}€</div>
            <div>
                <button onClick={() => onAdd(product)} className={'button'}>Bestellen</button>
            </div>
        </div>
    )
};