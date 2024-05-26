import { Container, Row, Col } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import img_1 from '../assets/img/brands/1.png'
import img_2 from '../assets/img/brands/2.png'
import img_3 from '../assets/img/brands/3.png'
import img_4 from '../assets/img/brands/4.png'
import img_5 from '../assets/img/brands/5.png'
import img_6 from '../assets/img/brands/6.png'

export default function Brands() {
  const brands = [img_1, img_2, img_3, img_4, img_5, img_6];
  return (
    <div className='brands position-relative z-1'>
      <div className="brands-shape">
        <svg width="419" height="84" viewBox="0 0 419 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.759766H348.268C354.71 0.759766 360.758 3.86265 364.515 9.09552L418.039 83.646H0V0.759766Z" fill="#E5CF63" />
        </svg>
      </div>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="brands-title">
              <h2 className='mb-0 mb-md-2' data-aos="fade-up" data-aos-offset="" data-aos-delay="">PARTNERS</h2>
              <svg width="233" height="6" viewBox="0 0 233 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="20.3281" y1="0.878418" x2="212.67" y2="0.878418" stroke="url(#paint0_linear_0_421)" />
                <line x1="0.5" y1="4.87842" x2="232.5" y2="4.87841" stroke="url(#paint1_linear_0_421)" />
                <defs>
                  <linearGradient id="paint0_linear_0_421" x1="20.3281" y1="1.87842" x2="212.67" y2="1.87784" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0" />
                    <stop offset="0.21262" />
                    <stop offset="0.836852" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_0_421" x1="0.5" y1="5.87842" x2="232.5" y2="5.87754" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0" />
                    <stop offset="0.21262" />
                    <stop offset="0.836852" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </Col>
        </Row>
      </Container>
      <div className="brands-wrap bg-primary">
        <Marquee speed={50} autoFill={true}>
          {brands.map((item, index) => (
            <div className="brands-item" key={index} data-aos="fade-up" data-aos-offset="" data-aos-delay={`${index+1}00`}><img src={item} alt="" /></div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
