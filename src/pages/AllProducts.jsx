import React, { useState } from "react";
import FilterSection from "../components/FilterSection";
import ProductsWrapper from "../components/ProductsWrapper";
import { Button, FloatButton } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import AddCaseDrawer from "../components/AddCaseDrawer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AllProducts = () => {
  // const navigate = useNavigate();
  const allProducts = useSelector((state) =>
    state.allproducts.products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(state.allproducts.searchTerm.toLowerCase())
    )
  );
  console.log(allProducts);

  const [openAddDrawer, setOpenAddDrawer] = useState(false);
  return (
    <div className="px-4 py-3 space-y-5">
      <FilterSection />
      {allProducts.length > 0 ? (
        <>
          <Button
            type="primary"
            size="large"
            onClick={() => setOpenAddDrawer(true)}
          >
            Add New Case
          </Button>
          <ProductsWrapper
          allProducts={allProducts}
          onOpenAddDrawer={() => setOpenAddDrawer(true)}
        />
        </>
      ) : (
        <ProductsWrapper
          allProducts={allProducts}
          onOpenAddDrawer={() => setOpenAddDrawer(true)}
        />
      )}

      <AddCaseDrawer
        open={openAddDrawer}
        onClose={() => setOpenAddDrawer(false)}
      />

      <FloatButton
        shape="square"
        type="primary"
        style={{
          insetInlineEnd: 24,
        }}
        icon={<PlusCircleTwoTone />}
      />
    </div>
  );
};

export default AllProducts;
