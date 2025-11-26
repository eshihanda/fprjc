import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
import '../Styles/ImpactNumbers.css';


const numbers = [
    {value: 600, label: 'Women empowered'},
    {value: 200, label: 'Girls trained'},
    {value: 20, label: 'communities reached'},
    {value:60, label: 'projects completed'},
];
const ImpactNumbers = () => {
  return (
    <section className='py-5 text-white'>
        <Container className='bg-purple p-5 rounded'>
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