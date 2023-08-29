import './cart-icon.styles.scss'

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
    const { setIsCartOpen, isCartOpen } = useContext(CartContext)
    
    const toggleCartHandler = () => {
        setIsCartOpen(!isCartOpen)
    
    } 
  return (
    <div className='cart-icon-container' onClick={toggleCartHandler}>
        <ShopIcon className='shop-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon