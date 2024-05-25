import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlay } from 'react-icons/fa'
import Slider from './Slider'

import m_1 from '../assets/img/methods/1.png'
import m_2 from '../assets/img/methods/2.png'
import m_3 from '../assets/img/methods/3.png'

export default function Banner() {
  const endDate = "2024-06-18";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const methods= [
    {
      icon: m_1,
      name: 'ETH'
    },
    {
      icon: m_2,
      name: 'USDT'
    },
    {
      icon: m_3,
      name: 'FIAT'
    },
  ]
  return (
    <div className="banner position-relative overflow-hidden">
      <Container>
        <Row className='align-items-center justify-content-between'>
          <Col xs={12} md={6}>
            <div className="banner-content text-center text-md-start">
              <h1 className='mb-3 pb-md-1 pb-lg-2 text-white'>SPACECATCH</h1>
              <p className='mb-4 pb-md-2 pb-lg-0 mb-5 fw-medium'>At the forefront of Web3 AR gaming stands an unparalleled experience</p>
              <a href="#" className="btn gap-2 d-inline-flex align-items-center justify-content-center" target='_blank'><span className='text-black rounded-pill d-flex align-items-center justify-content-center'><FaPlay /></span> WATCH THE TRAILER</a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <div className="banner-wrap">
              <div className="banner-inner border border-3 border-primary rounded text-center">
                <h4 className='text-uppercase mb-3 mb-md-4 text-white'>cat dog TOKEN launches on day Last chance to buy!</h4>
                <div className="banner-time d-grid mb-4">
                  {Object.entries(timeLeft).map(([unit, value], index) => (
                      <div className="banner-timer d-flex align-items-center justify-content-center rounded-pill border border-primary" key={index}>
                        <div className="banner-timer-inner border border-white border-opacity-50 rounded-pill text-center d-flex align-items-center justify-content-center flex-column">
                          <strong className='fw-semibold text-white'>{value}</strong>
                          <span className='d-block text-white text-capitalize'>{unit}</span>
                        </div>
                      </div>
                    ))}
                </div>
                <h5 className='text-white mb-12'>Till DOGE20 claim and launch</h5>
                <ul className='mb-3'>
                  <li className='mb-2' style={{opacity:'65%'}}>Over $10M raised!</li>
                  <li className='mb-2'>Your purchased DOGE20 = 0 <IoMdInformationCircleOutline /></li>
                  <li>Your stakeable DOGE20 = 0 <IoMdInformationCircleOutline /></li>
                </ul>
                <div className='text-white total mb-3 mb-md-4 fw-semibold d-flex align-items-center justify-content-between gap-3'><span className='flex-grow-1'>1 DOGE20 = $0.00022</span></div>
                <div className="methods">
                  <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                    {methods.map((item,index) => (
                      <div className="methods-card rounded border border-primary flex-grow-1 d-flex align-items-center flex-wrap gap-2 justify-content-center" key={index}>
                        <div className="icon"><img width={28} src={item.icon} alt="" /></div>
                        <div className='content'>{item.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="methods-item mb-3">
                    <div className="label fw-semibold d-flex align-items-center justify-content-between mb-3">
                      <p>Pay with ETH</p>
                      <p>Max</p>
                    </div>
                    <div className="position-relative">
                      <input type="text" className='form-control bg-transparent border-primary rounded-3 shadow-none' defaultValue={0} />
                      <span className='icon position-absolute top-50 translate-middle-y end-0 me-3 me-md-4'><img src={m_1} alt="" /></span>
                    </div>
                    <p className="text-start mt-3 text-white"><small className='fs-6'>Receive</small> <strong className='fw-semibold'>DOGE20</strong></p>
                    <div className="mt-3 pt-1">
                      <a href="#" className="btn d-block text-center">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Slider />
    </div>
  )
}
