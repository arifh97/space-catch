import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/youtube'
import CommonTitle from "./CommonTitle";
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import videoPoster from "../assets/img/about-img.png";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [key, setKey] = useState(0);

  const handleVideoEnded = () => {
    setKey((prevKey) => prevKey + 1);
  };
  const playBtn =
    <div className="about-video-icon rounded-pill d-flex align-items-center justify-content-center bg-white text-black">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.7091 13.4568L6.84267 1.01973C6.1397 0.667969 5.35845 0.501833 4.57317 0.537117C3.7879 0.572401 3.02469 0.807934 2.35611 1.22133C1.68752 1.63472 1.13577 2.21224 0.753293 2.89898C0.37082 3.58572 0.170337 4.35887 0.1709 5.14494V28.6363C0.170337 29.4224 0.37082 30.1955 0.753293 30.8823C1.13577 31.569 1.68752 32.1465 2.35611 32.5599C3.02469 32.9733 3.7879 33.2089 4.57317 33.2441C5.35845 33.2794 6.1397 33.1133 6.84267 32.7615L31.7091 20.3245C32.3463 20.0051 32.882 19.5148 33.2564 18.9084C33.6308 18.302 33.8291 17.6033 33.8291 16.8906C33.8291 16.1779 33.6308 15.4793 33.2564 14.8729C32.882 14.2664 32.3463 13.7761 31.7091 13.4568Z" fill="currentColor" />
      </svg>
    </div>
    ;
  return (
    <div className="about-video common-padding position-relative z-1 overflow-hidden">
      <Container>
        <Row className='justify-content-center'>
          <Col lg={12}>
            <CommonTitle className="text-center" title="Hivebot Is Now Live" />
          </Col>
          <Col xs={12} lg={10}>
            <div className='about-video-wrap' data-aos="fade-up" data-aos-duration="1600">
              <ReactPlayer
                className="about-video-inner"
                light={videoPoster}
                key={key}
                url={'https://www.youtube.com/watch?v=Sbi5nIiDbjQ'}
                playing={true}
                loop={true}
                width="100%"
                height="700"
                style={{ maxWidth: '100%', height: 'auto' }}
                muted={false}
                onEnded={handleVideoEnded}
                controls={false}
                playIcon={playBtn}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}