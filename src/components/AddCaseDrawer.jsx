import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from "antd";
const { Option } = Select;
import { useDispatch } from "react-redux";
import { addProduct } from "../app/store";

const AddCaseDrawer = ({ onClose, open }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(1);
  const [loadingAdd, setLoadingAdd] = useState(false);

  const handleSubmit = async () => {
    setLoadingAdd(true);

    const data = await form.validateFields();
    dispatch(addProduct(data));

    setTimeout(() => {
      setLoadingAdd(false);
      onClose();
      form.resetFields();
    }, 500);
  };
  return (
    <Drawer
      title="Create a new Case"
      width={640}
      onClose={onClose}
      open={open}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} type="primary" loading={loadingAdd}>
            Save
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark form={form}>
        <Row gutter={16}>
          <Col span={24} md={12}>
            <Form.Item
              name="name"
              label="Case Name"
              rules={[
                {
                  required: true,
                  message: "Please enter Case name",
                },
              ]}
            >
              <Input placeholder="Please enter Case name" />
            </Form.Item>
          </Col>
          <Col span={12} md={6}>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Please enter Price",
                },
                {
                  type: "number",
                  min: 0,
                  message: "Minus not allowed",
                },
              ]}
              initialValue={1}
            >
              <InputNumber
                min={0}
                className="w-full"
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                onChange={(value) => {
                  setPrice(value);
                  form.setFieldsValue({
                    price: value,
                  });
                }}
              />
            </Form.Item>
          </Col>
          <Col span={12} md={6}>
            <Form.Item
              name="stock"
              label="Stock"
              rules={[
                {
                  required: true,
                  message: "Please enter Stock",
                },
              ]}
              initialValue={1}
            >
              <InputNumber className="w-full" min={1} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: false,
                  message: "please enter url description",
                },
              ]}
              initialValue={""}
            >
              <Input.TextArea rows={4} placeholder="please enter description" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default AddCaseDrawer;
