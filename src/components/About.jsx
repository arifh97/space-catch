import React from "react";
import {Container, Col, Row } from 'react-bootstrap';
import aboutImg from "../assets/img/aboutImg.png"
export default function About() {
  const aboutContent = [
    {
      title : "AUGMENTED REALITY",
      desc: "Advanced AR combat mode for the best gaming experience!",
    },
    {
      title : "AI, MOVE-TO-EARN, WEB3",
      desc: "Complex AI features, sustainable move-to-earn. Trade your assets!",
    },
    {
      title : "PROFESSIONAL GAMING STUDIO",
      desc: "Designed by the professional gaming studio: Pixelfield",
    },
  ]
  return (
    <div className="about" id='about'>
      <Container>
        <Row className="section-title text-center text-lg-start" data-aos="fade-up" data-aos-offset="" data-aos-delay="">
          <Col lg={6}>
            <h2>SPACECATCH THE NEXT-GENERATION AR GAME</h2>
          </Col>
          <Col lg={6}>
            <p>Introducing SPACECATCH, the cutting-edge AR gaming experience poised to revolutionize how we interact with the virtual world. </p>
          </Col>
        </Row>
        <Row className='justify-content-center align-items-end'>
          <Col lg={6} className="order-2 order-lg-1">
            <div className="about-left" data-aos="fade-right" data-aos-offset="" data-aos-delay="">              
              <figure className="aboutImg m-0">
                <img src={aboutImg} alt="" />
              </figure>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2 text-center text-lg-start">
            <div className="about-content">
              {aboutContent.map((item, index)=>(
                <div className="single-item" key={index}  data-aos="fade-up" data-aos-offset="" data-aos-delay={`${index+1}00`}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
