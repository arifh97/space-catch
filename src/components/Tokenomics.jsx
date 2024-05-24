import { Col, Container, Row } from "react-bootstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import tokenImg from '../assets/img/token-img.png'
import CommonTitle from "./CommonTitle";

export default function tokenomics() {  
  const tokenData = [
    {
      name: 'Lp',
      percent: 70,
      color: '#E16DDF',
    },
    {
      name: 'Cex listing',
      percent: 10,
      color: '#FFD41C',
    },
    {
      name: 'Marketing ',
      percent: 10,
      color: '#FB7C28',
    },
    {
      name: 'Airdrop',
      percent: 10,
      color: '#023FD5',
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
        cutout:100,
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
        <Row className=' align-items-center'>
          <Col xs={12} md={6} >
            <CommonTitle className="text-center text-md-start mb-4 mb-md-5" title="Tokenomics" />            
            <div className="tokenomics-percentage">
              {tokenData.map((item, index) => (
                <div className="tokenomics-percentage-item" key={index} data-aos="fade-up" data-aos-duration={`1${index+6}00`}>
                  <div className="line">
                    <div className="line-wrap" style={{ backgroundColor: item.color }}></div>
                  </div>
                  <div className="text">
                    <p>{item.percent}% {item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end'>
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