import React from "react";
import { Row, Col, Card, Avatar, Button } from "antd";
import Meta from "antd/es/card/Meta";
import ProductCard from "./ProductCard";

const ProductsWrapper = ({ allProducts, onOpenAddDrawer }) => {
  const renderedProduct = allProducts.map((product, index) => {
    return <ProductCard key={product.id ?? index} product={product} />;
  });
  return (
    <div className=" p-3">
      {allProducts.length > 0 ? (
        <Row gutter={[16, 16]}>{renderedProduct}</Row>
      ) : (
        <div style={{ height: "300px" }} className="flex  justify-center items-center">
          <div className="space-y-8">
          <div className="text-4xl">Empty Product</div>
          <Button
            type="primary"
            size="large"
            onClick={onOpenAddDrawer}
          >
            Add New Case
          </Button>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default ProductsWrapper;
