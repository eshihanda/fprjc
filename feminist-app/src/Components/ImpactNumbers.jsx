import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
import '../Styles/ImpactNumbers.css';


const numbers = [
    {value: 10000, label:'Women empowered'},
    {value: 500, label: 'Girls trained'},
    {value: 20, label: 'communities reached'},
    {value:500, label:'projects completed'},
];
const ImpactNumbers = () => {
  return (
    <section className='py-5 text-white'>
        <Container style={{backgroundColor: '#5e1385'}} className='p-5 rounded'>
            <h2 className='text-center fw-bold mb-5'> Our Impact in Numbers</h2>
            <Row className='text-center'>
                {numbers.map((item, index )=> (
                    <Col md={3} sm={6} xs={6} key={index} className='mb-4'>
                        <h3 className='impact-numbers'>
                            <CountUp end={item.value} duration={20} />+
                        </h3>
                        <p>{item.label}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default ImpactNumbers