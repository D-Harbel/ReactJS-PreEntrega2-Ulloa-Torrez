import cart from './assets/cart.svg';
import './CartWidget.css';

const Cartwidget = () => {
    return (
        <div className='cart'>
            <img className='imgcart' src={cart} alt="cart-widget"/>
            1
        </div>
    )
}

export default Cartwidget