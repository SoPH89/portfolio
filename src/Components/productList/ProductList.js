import "./productList.css";
import Product from "../product/Product";
import {Container, Row, Col} from "react-bootstrap";
import { products } from "../../data";

const ProductList = () => {
  return (

    <Container className="pl">
      <Row>
        <Col>
      <div className="h2Div">
    <h2 className="h2About">
ABOUT<span style={{color: '#07D665'}}> ME</span>
    </h2>
    </div>
      
      <div className="pl-list">
        
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
       </Col>
      </Row>
    </Container>
   
    
    
  );
};

export default ProductList;
