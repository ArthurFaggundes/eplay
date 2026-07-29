import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear() // para pegar o ano atual

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Action</Link>
          </li>
          <li>
            <Link>Adventure</Link>
          </li>
          <li>
            <Link>Sports</Link>
          </li>
          <li>
            <Link>Simulation</Link>
          </li>
          <li>
            <Link>Strategy</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Quick Acess</SectionTitle>
        <Links>
          <li>
            <Link>News</Link>
          </li>
          <li>
            <Link>Offers</Link>
          </li>
          <li>
            <Link>Comming Soon</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-Play todos o direitos reservados</p>
    </div>
  </Container>
)
export default Footer
