import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, price, stock, img }) => {

    return (
        <div className="ContainerDiv">
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={`/images/${img}`} alt={name} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        precio: ${price}
                    </p>
                    <p className="Info">
                        stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
                </footer>
            </article>
        </div>

    )
}

export default ItemDetail
