import CustomButton from '../custom-button/custom-button.comp'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">

        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown