import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, price, category, stock, img}) => {

    return (
        <div className="ContainerDiv">
                    <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={`/images/${img}`} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    precio: ${price}
                </p>
                <p className="Info">
                    stock disponible: {stock}
                </p>
                <p className="Info">
                    categoria: {category}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
        </div>

    )
}

export default Item