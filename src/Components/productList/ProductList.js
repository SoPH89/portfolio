import "./productList.css";
import Product from "../product/Product";
import {Container, Row, Col} from "react-bootstrap";
import { products } from "../../data";

const ProductList = () => {
  return (
    
    <div className="pl">
        <h2 className="h2Projects">
My<span style={{color: '#07D665'}}> Porfolio</span>
    </h2>
      
      <div className="pl-list">
        
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
