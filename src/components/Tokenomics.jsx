import { Col, Container, Row } from "react-bootstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import tokenImg from '../assets/img/token-img.png'
import tokenContentBG from '../assets/img/tokenContentBG.png'
import CommonTitle from "./CommonTitle";

export default function tokenomics() {
  const tokenData = [
    {
      name: 'Liquidity',
      percent: 35,
      color: '#E5CF63',
    },
    {
      name: 'Team',
      percent: 5,
      color: '#C060A1',
    },
    {
      name: 'Future development ',
      percent: 10,
      color: '#0147F7',
    },
    {
      name: 'Staking  rewards',
      percent: 20,
      color: '#2BBF7F',
    },
    {
      name: 'Presale',
      percent: 30,
      color: '#6D67E4',
    },
  ];

  const data = {
    labels: tokenData.map((item) => item.name),
    datasets: [
      {
        label: 'Value',
        data: tokenData.map((item) => item.percent),
        backgroundColor: tokenData.map((item) => item.color),
        borderColor: '#CDEEFF',
        borderWidth: 0,
        hoverOffset: 0,
        borderRadius: 0,
        cutout: "70%"
      },
    ],
  };

  const options = {
    offset: 0,
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false,
      }
    },
  }

  return (
    <div className='tokenomics common-padding'>
      <Container>
        <Row className='tokenomics-wrapper align-items-center position-relative'>
          <figure className="tokenContentBG m-0 d-none d-md-block">
            <img src={tokenContentBG} alt="" />
          </figure>
          <div className="shape-1 d-none d-xl-block position-absolute w-auto h-auto px-0 ms-3">
            <svg width="701" height="300" viewBox="0 0 701 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M694.645 6.00379H551.05C436.115 -0.143393 495.358 162.48 464.555 221.854C439.424 270.295 368.503 294.702 334.444 294.702H66.7606H5" stroke="#E5CF63" strokeWidth="2" />
              <circle cx="695.094" cy="5.80566" r="5" fill="#E5CF63" />
              <circle cx="5" cy="294.702" r="5" fill="#E5CF63" />
            </svg>
          </div>
          <div className="shape-2 d-none d-xl-block position-absolute end-0 w-auto h-auto px-0 mt-4">
            <svg width="188" height="111" viewBox="0 0 188 111" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.13281 5.187H40.1521C53.1919 4.78697 80.7821 10.2328 86.8239 35.2166C87.7423 40.4608 89.7384 52.0637 90.3754 56.5223C91.4504 69.9885 100.328 97.3077 126.951 104.561C128.249 104.914 128.898 105.091 130.878 105.356C132.858 105.621 134.163 105.621 136.774 105.621H182.817" stroke="#E5CF63" strokeWidth="2" />
              <circle cx="5.13281" cy="5.16699" r="5" fill="#E5CF63" />
              <circle cx="182.816" cy="105.621" r="5" fill="#E5CF63" />
            </svg>
          </div>
          <Col lg={6} >
            <h2>Tokeno<span>mics</span></h2>
            <div className="tokenomics-percentage">
              {tokenData.map((item, index) => (
                <div className="tokenomics-percentage-item" key={index} data-aos="fade-up" data-aos-duration={`1${index + 6}00`}>
                  <div className="dot" style={{ backgroundColor: item.color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                      <path d="M21.6853 1.27821L7.89717 14.768L0.712891 7.73316L1.87373 6.5985L7.89717 12.4735L20.5245 0.143555L21.6853 1.27821Z" fill="white" />
                    </svg>
                  </div>
                  <div className="text">
                    <p>{item.name}  {item.percent}% </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} className='d-flex justify-content-center justify-content-md-end'>
            <div className="tokenomics-chart position-relative z-1 mt-4 mt-md-5 mt-lg-0" data-aos="fade-left">
              <div className="tokenomics-logo position-absolute top-50 start-50 z-n1">
                <img src={tokenImg} alt="" />
              </div>
              <Doughnut data={data} options={options} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}