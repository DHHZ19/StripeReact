import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productStore";
import ProductCard from "../components/ProdcutCard";
function Store() {
  return (
    <>
      <h1 align="center" className="p-3" style={{ color: "pink" }}>
        Welcome to the store
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <h1>Product: {product.title}</h1>
          </Col>
        ))}
        <h1>Product</h1>
      </Row>
    </>
  );
}

export default Store;
