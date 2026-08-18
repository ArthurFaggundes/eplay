import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../utils'

import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} game(s) in the cart</S.Quantity>
        <S.Prices>
          Total of {formatPrice(getTotalPrice(items))}
          <span>Up to 6 interest-free installments</span>
        </S.Prices>
        {items.length === 0 ? (
          <S.NotGameContainer>
            Your cart is current empty. <br />
            Add games to your cart by clicking in &quot;Add to cart&quot;
          </S.NotGameContainer>
        ) : (
          <Button
            onClick={() => goToCheckout()}
            title="Click here to continue with the purchase"
            type="button"
          >
            Complete the purchase
          </Button>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
