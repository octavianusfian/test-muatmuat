import { Button, Card, Col, Popconfirm } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../app/store";
import EditCaseDrawer from "./EditCaseDrawer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, stock, image, id, description } = product;
  const [openConfirm, setOpenConfirm] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  const handleOk = () => {
    setConfirmLoading(true);
    handleDeleteProduct();
    setTimeout(() => {
      setOpenConfirm(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setOpenConfirm(false);
  };
  return (
    <Col sm={24} md={12} lg={8}>
      <Card
        title={name}
        hoverable
        bordered={false}
        actions={[
          <Button onClick={() => setOpenEditDrawer(true)}>
            <EditOutlined key="edit" />
          </Button>,
          <Popconfirm
            title="Delete Product"
            description="Are you sure delete this product ?"
            open={openConfirm}
            onConfirm={handleOk}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}
          >
            <Button danger onClick={() => setOpenConfirm(true)}>
              <DeleteOutlined key="delete" />
            </Button>
          </Popconfirm>,
        ]}
        cover={<img alt="example" src={image} />}
      >
        <EditCaseDrawer
          open={openEditDrawer}
          onClose={() => setOpenEditDrawer(false)}
          product={product}
        />
        <Meta
          title={`$ ${price}`}
          description={
            <div>
              <div>Stock: {stock}</div>
              <div>Description: {description}</div>
            </div>
          }
        />
      </Card>
    </Col>
  );
};

export default ProductCard;
