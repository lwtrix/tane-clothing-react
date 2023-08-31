import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CartItem from '../cart-item/cart-item.comp'
import CustomButton from '../custom-button/custom-button.comp'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { items } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
        { items.length ? (<div className="cart-items">
          { items.map(item => (
           <CartItem key={item.id} item={item}/>
          ))}
        </div>) : <span className='empty-message'>NOTHING HERE YET..</span>}
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown