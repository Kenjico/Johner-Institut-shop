export default function Basket(props) {
    const {basketItems, onAdd, onRemove} = props;
    const itemsPrice = basketItems.reduce((a,c) => a +c.price * c.quantity,0);
    const taxPrice = itemsPrice * 0.07;
    const shippingPrice = basketItems.length * 5;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return <aside className={'block col-1'}>
        <h2>Warenkorb Inhalt</h2>
        <div>
            {basketItems.length === 0 && <div>Der Warenkorb ist Leer</div>}
            {basketItems.map((item) => (
                <div key={item.id} className={'row'}>
                    <div className={'col-2'}>{item.name}</div>
                    <div className={'col-2'}>
                        <button onClick={() => onAdd(item)} className={'add'}>
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className={'remove'}>
                            -
                        </button>
                        <div className={'col-2 text-right'}>
                            {item.quantity} x {item.price.toFixed(2)}€
                        </div>
                    </div>
                </div>
            ))}
            {basketItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className={'row'}>
                        <div className={'col-2'}>Warenwert</div>
                        <div className={'col-1 text-right'}>{itemsPrice.toFixed(2)}€</div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-2'}>Mwst.</div>
                        <div className={'col-1 text-right'}>{taxPrice.toFixed(2)}€</div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-2'}>Versandkosten</div>
                        <div className={'col-1 text-right'}>{shippingPrice.toFixed(2)}€</div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-2'}>Gesamtpreis</div>
                        <div className={'col-1 text-right'}>{totalPrice.toFixed(2)}€</div>
                    </div>
                </>
            )}
        </div>
    </aside>;
}