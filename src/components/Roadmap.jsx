import { Container, Row, Col } from 'react-bootstrap'
import Team from './Team'

export default function Roadmap() {
  const roadmap = [
    {
      title: 'P',
      des: [
        `Launch HiveBot`,
        `Launch zkHive’s beta suspicious behavior system`,
        `Connect zkHive’s different instances into the zkHive’s Inter-Connected Network`,
        `Deploy and connect to our telegram group`,
      ]
    },
    {
      title: 'P',
      des: [
        `Launch Under Attack Mode`,
        `Connect the HiveBot to other telegram groups`,
        `Increase the adoption`,
        `Stabilize and improve the Inter-Connected Network`,
      ]
    },
    {
      title: 'P',
      des: [
        `Establish partnerships with industry leaders in the telegram security landscape`,
        `Establish partnerships cloud based security products`,
        `Introduce Neural Network solutions`,
      ]
    },
    {
      title: 'P',
      des: [
        `Launch zkHive’s karma program`,
        `Continuously perform security audits and platform improvements`,
        `Form new partnerships with new major players`,
        `Train the models on new datasets`,
      ]
    },
  ]
  return (
    <div className='roadmap common-padding'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={6}>
            <div className='roadmap-title' data-aos="fade-up" data-aos-offset="" data-aos-delay="">
              <h2 className='mb-0 text-center text-uppercase'>Roadmap</h2>
            </div>
          </Col>
        </Row>
        <Row className='align-items-xl-end roadmap-wrap'>
          {roadmap.map((item, index) => (
            <Col xs={12} md={6} xl={3} key={index} data-aos="fade-up" data-aos-offset="" data-aos-delay={`${index+1}00`}>
              <div className={`roadmap-item p-3 ${index == 0 || index == roadmap.length - 1 ? 'py-big d-flex flex-column justify-content-center' : ''}`}>
                <div className="text-center title mb-3 pb-1 pb-md-2 mb-lg-4 pb-lg-3">
                  <h4 className='ff-1 fw-bold mb-0 text-white'>{item.title}{index + 1}</h4>
                  <svg width="117" height="6" viewBox="0 0 117 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="0.878418" x2="107" y2="0.878418" stroke="url(#paint0_linear_27_16)" />
                    <line x1="-4.37114e-08" y1="4.87842" x2="117" y2="4.87841" stroke="url(#paint1_linear_27_16)" />
                    <defs>
                      <linearGradient id="paint0_linear_27_16" x1="10" y1="1.87842" x2="107" y2="1.87827" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FCF406" stopOpacity="0" />
                        <stop offset="0.21262" stopColor="#FCF406" />
                        <stop offset="0.836852" stopColor="#FCF406" />
                        <stop offset="1" stopColor="#FCF406" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_27_16" x1="4.37114e-08" y1="5.87842" x2="117" y2="5.87819" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FCF406" stopOpacity="0" />
                        <stop offset="0.21262" stopColor="#FCF406" />
                        <stop offset="0.836852" stopColor="#FCF406" />
                        <stop offset="1" stopColor="#FCF406" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <ul>
                  {item.des.map((item, index) => (
                    <li key={index} className='d-flex text-start gap-2 mb-2'>
                      <span className="icon">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.04894 1.30547C8.3483 0.384156 9.6517 0.384158 9.95106 1.30547L11.2451 5.28825C11.379 5.70027 11.763 5.97923 12.1962 5.97923H16.3839C17.3527 5.97923 17.7554 7.21885 16.9717 7.78825L13.5838 10.2497C13.2333 10.5044 13.0866 10.9558 13.2205 11.3678L14.5146 15.3506C14.8139 16.2719 13.7595 17.038 12.9757 16.4686L9.58778 14.0071C9.2373 13.7524 8.7627 13.7525 8.41221 14.0071L5.02426 16.4686C4.24054 17.038 3.18607 16.2719 3.48542 15.3506L4.7795 11.3678C4.91338 10.9558 4.76672 10.5044 4.41623 10.2497L1.02827 7.78825C0.244561 7.21885 0.647338 5.97923 1.61606 5.97923H5.8038C6.23703 5.97923 6.62099 5.70027 6.75486 5.28825L8.04894 1.30547Z" fill="#FCF406" />
                        </svg>
                      </span>
                      <span className='ms-md-1'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Team />
    </div>
  )
}
