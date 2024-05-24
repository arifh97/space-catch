import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Social from './Social'
import Logo from './Logo'

export default function Footer() {
  const items = [
    {
      title: 'Navigation',
      siPage: true,
      links: [
        {
          name: 'Home',
          url: 'banner'
        },
        {
          name: 'About',
          url: 'about'
        },
        {
          name: 'Comparison',
          url: 'comparison'
        },
        {
          name: 'Hivebot',
          url: ''
        },
        {
          name: 'Roadmap',
          url: 'roadmap'
        },
      ]
    },
    {
      title: 'Quick Links',
      siPage: false,
      links: [
        {
          name: 'Uniswap',
          url: ''
        },
        {
          name: 'Etherscan',
          url: ''
        },
        {
          name: 'Dextools',
          url: ''
        },
        {
          name: 'Github',
          url: ''
        },
        {
          name: 'Medium',
          url: ''
        },
      ]
    },
    {
      title: 'Social',
      siPage: false,
      links: [
        {
          name: 'Telegram Community',
          url: ''
        },
        {
          name: 'Telegram Bot',
          url: ''
        },
        {
          name: 'Twitter',
          url: ''
        },
      ]
    },
  ];
  return (
    <div className="footer bg-black position-relative z-1">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-wrap d-flex flex-wrap justify-content-between">
              <div className="footer-item">
                <Logo />
                <Social />
                <a href="mailto:contact@gamin.io" className='opacity-1'>Email: contact@gamin.io</a>
              </div>
              {items.map((item, index) => (
                <div className="footer-item" key={index}>
                  <h4 className='mb-2 pb-1 mb-md-3 pb-md-2 text-white fw-medium ff-1'>{item.title}</h4>
                  <ul>
                    {item.links.map((item, index) => (
                      <li key={index}>
                        {item.isPage?(
                          <Link to={item.url} spy={true} smooth={true} duration={600} offset={-100}>{item.name}</Link>
                        ):(
                          <a href={item.url} className='d-block'>{item.name}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright border-top border-white">
        <Container fluid>
          <Row>
            <Col xs={12} className='text-center'>
              <p>GamingToken ©, All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
