import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categories</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">New Games</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Offers</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span>Product(s)</span>
          <img src={cart} alt="Shopping Cart" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMobileNavOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categories">Categories</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">New Games</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Offers</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
