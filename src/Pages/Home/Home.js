import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

import PrivateHook from '../../PrivateHook/PrivateHook';
import Cart from '../Cart/Cart';
import Carusol from '../Carusol/Carusol';
import { BiRightArrowAlt,  } from "react-icons/bi";
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
        
import './Home.css'


const Home = () => {
  
   const services = useLoaderData([])
//    console.log(services)

    PrivateHook('home')



    return (
             
        <Container>
            <Row>
                <Col>
                
                <div>

       <Carusol></Carusol>


  <div className='prarend' style={{ 
       backgroundColor:'lightcyan', MaxHeight:'560px' }}>
     
      {
         services.map(servise => <Cart
         
             key={servise._id}

             servise={servise}
         > </Cart>)
      }
      
      
    
      
     </div>
  
     {/* <Link className='d-flex justify-content-around text-decoration-none pb-5' to='/services'>
     <Button style={{position:'absolute', bottom:'-290px', width:'150px'  }}  variant="outline-primary">See All <BiRightArrowAlt/> </Button>
        
         </Link>  */}
        
        <Link className='d-flex justify-content-around pt-2 text-decoration-none pb-5' to='/services'>
     <Button   variant="outline-primary">See All <BiRightArrowAlt/> </Button>
        
         </Link> 
        



    <Section1></Section1>

     <Section2></Section2>
</div>
                
                </Col>
            </Row>
        </Container>
    );
};

export default Home;