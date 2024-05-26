import {Container,Row,Col} from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import img from '../assets/img/team.jpg'

export default function Team() {
  const team = [
    {
      img: img,
      title:'Atqiur Rahman',
      position:'Founder, CEO',
    },
    {
      img: img,
      title:'Abul Kalam Azad',
      position:'Co-founder, CEO',
    },
    {
      img: img,
      title:'Parvaz Masud',
      position:'Co-founder, CEO',
    },
    {
      img: img,
      title:'Saidur Rahman Sojib',
      position:'Co-founder, CEO',
    },
    {
      img: img,
      title:'Yousuf Minner',
      position:'Co-founder, CEO',
    },
    {
      img: img,
      title:'Naimur Rahman',
      position:'Co-founder, CEO',
    },
    {
      img: img,
      title:'Abdur Rahman',
      position:'Co-founder, CEO',
    },
    {
      img: img,
      title:'Murad Hossain',
      position:'Co-founder, CEO',
    },
  ]
  return (
    <div className="team common-padding pb-0">
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className='text-center' title="Our Expert Team" />
          </Col>
        </Row>
        <Row className='team-wrap'>
          {team.map((item,index) => (
            <Col xs={6} lg={4} xl={3} key={index} data-aos="fade-up" data-aos-offset="" data-aos-delay={`${index+1}00`}>
              <div className="team-item text-center">
                <div className="team-img mx-auto"><img src={item.img} alt="" /></div>
                <h4 className='fw-medium ff-1 mb-2 text-white'>{item.title}</h4>
                <p>{item.position}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
