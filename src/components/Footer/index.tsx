import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear() // para pegar o ano atual

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link title="Click here to acess RPG games" to="/categories#rpg">
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Click here to acess Action games"
              to="/categories#action"
            >
              Action
            </Link>
          </li>
          <li>
            <Link
              title="Click here to acess Fight games"
              to="/categories#fight"
            >
              Fighting
            </Link>
          </li>
          <li>
            <Link
              title="Click here to acess Sports games"
              to="/categories#sports"
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              title="Click here to acess Simulation games"
              to="/categories#simulation"
            >
              Simulation
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Quick Acess</SectionTitle>
        <Links>
          <li>
            <Link title="Click here to acess the offers section" to="/#on-sale">
              Offers
            </Link>
          </li>
          <li>
            <Link
              title="Click here to acess the comming soon section"
              to="/#comming-soon"
            >
              Comming Soon
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-Play todos o direitos reservados</p>
    </div>
  </Container>
)
export default Footer
