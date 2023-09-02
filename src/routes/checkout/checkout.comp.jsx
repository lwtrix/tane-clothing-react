import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.comp'
import { CartContext } from '../../context/cart.context'
import './checkout.styles.scss'

const Checkout = () => {
    const { items } = useContext(CartContext)

  return (
    <div className='checkout-container'>
        <div className="checkout-grid">
            <div className='checkout-header'>
                <span className='column-name'>Product</span>
                <span className='column-name'>Description</span>
                <span className='column-name'>Quantity</span>
                <span className='column-name'>Price</span>
                <span className='column-name'>Remove</span>
            </div>
            {items.map(item => (
               <CheckoutItem item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Checkout