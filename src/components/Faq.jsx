import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import CommonTitle from './CommonTitle'

export default function Faq() {
  const faq = [
    {
      title: 'How to buy $gaming?',
      des: `$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $Gaming on Uniswap`,
    },
    {
      title: 'What is $gaming contract address?',
      des: `$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $Gaming on Uniswap`,
    },
    {
      title: 'Are there any $gaming aidrove?',
      des: `$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $Gaming on Uniswap`,
    },
    {
      title: 'How can i contact you?',
      des: `$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $Gaming on Uniswap`,
    },
  ]
  return (
    <div className='faq common-padding'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className="text-center" title="Frequently Asked QUestion" />
            <div className="faq-wrap position-relative">
              <Accordion defaultActiveKey="0">
                {faq.map((item, index) => (
                  <Accordion.Item eventKey={`${index}`} key={index}  data-aos="fade-up" data-aos-offset="" data-aos-delay={`${index+1}00`}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <p>{item.des}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
