import { Container, Row, Col } from 'react-bootstrap'
import Slider from './Slider'
import { FaPlay } from 'react-icons/fa'
import { useEffect, useState } from 'react';

export default function Banner() {
  const endDate = "2024-06-18";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
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
  return (
    <div className="banner position-relative z-1 overflow-hidden">
      <Container>
        <Row className='align-items-center justify-content-between'>
          <Col xs={12} md={6}>
            <div className="banner-content text-center text-md-start">
              <h1 className='mb-3 pb-md-1 pb-lg-2'>SPACECATCH</h1>
              <p className='mb-4 pb-md-2 pb-lg-0 mb-5'>At the forefront of Web3 AR gaming stands an unparalleled experience</p>
              <a href="#" className="btn gap-2 d-inline-flex align-items-center justify-content-center" target='_blank'><FaPlay /> WATCH THE TRAILER</a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="banner-wrap">
              <div className="banner-inner border border-3 border-primary rounded text-center">
                <h4 className='text-uppercase mb-3 mb-md-4'>cat dog TOKEN launches on day Last chance to buy!</h4>
                <div className="banner-timer d-grid">
                  {Object.entries(timeLeft).map(([unit, value], index) => (
                      <div className="banner-time p-2 rounded-pill" key={index}>
                        <div className="banner-timer-inner text-center">
                          <strong className='fw-semibold text-white'>{value}</strong>
                          <span className='d-block text-white'>{unit}</span>
                        </div>
                      </div>
                    ))}
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
