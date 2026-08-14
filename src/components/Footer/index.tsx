import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear() // para pegar o ano atual

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Action</Link>
          </li>
          <li>
            <Link to="/categories#fight">Fighting</Link>
          </li>
          <li>
            <Link to="/categories#sports">Sports</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulation</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Quick Acess</SectionTitle>
        <Links>
          <li>
            <Link to="#/on-sale">Offers</Link>
          </li>
          <li>
            <Link to="#/comming-soon">Comming Soon</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-Play todos o direitos reservados</p>
    </div>
  </Container>
)
export default Footer
