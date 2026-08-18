import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

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
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link title="Click here to return to the Home page" to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Click here to acess the categorie section"
                  to="/categories"
                >
                  Categories
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Click here to acess the comming soon section"
                  to="/#comming-soon"
                >
                  Comming Soon
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Click here to acess the offers section"
                  to="/#on-sale"
                >
                  Offers
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton
          title="Click here to open your current Cart"
          onClick={openCart}
        >
          {items.length} <span>Product(s)</span>
          <img src={cart} alt="Shopping Cart" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMobileNavOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Click here to acess the categorie section"
              to="/categories"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Categories
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Click here to acess the comming soon section"
              to="/#comming-soon"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Comming Soon
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Click here to acess the offers section"
              to="/#on-sale"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Offers
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
