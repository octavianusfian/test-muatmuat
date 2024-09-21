import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Layout, Menu } from "antd";
import "./App.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import AllProducts from "./pages/AllProducts";
const { Header, Footer, Content } = Layout;
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <>
      <Layout
        style={{
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#F3F1EB",
        }}
      >
        <Header style={{ backgroundColor: "inherit" }}>
          <HeaderComponent />
        </Header>
        <Content className="p-3 h-1/2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="allproducts" element={<AllProducts />} />
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Content>
        <Footer className="text-center  h-1/4 flex items-center justify-center">
          Octavianus Fian ©{new Date().getFullYear()} Created by Octavianus Fian{" "}
        </Footer>
      </Layout>
    </>
  );
}

export default App;
