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
        borderRadius:0,
        cutout:"70%"
      },
    ],
  };

  const options = {
    offset:0,
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
        <Row className='tokenomics-wrapper align-items-center'>
          <figure className="tokenContentBG">
            <img src={tokenContentBG} alt="" />
          </figure>
          <Col lg={6} >
            <h2>Tokeno<span>mics</span></h2>       
            <div className="tokenomics-percentage">
              {tokenData.map((item, index) => (
                <div className="tokenomics-percentage-item" key={index} data-aos="fade-up" data-aos-duration={`1${index+6}00`}>
                  <div className="dot"  style={{ backgroundColor: item.color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                      <path d="M21.6853 1.27821L7.89717 14.768L0.712891 7.73316L1.87373 6.5985L7.89717 12.4735L20.5245 0.143555L21.6853 1.27821Z" fill="white"/>
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
            <div className="tokenomics-chart position-relative z-1" data-aos="fade-left">
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