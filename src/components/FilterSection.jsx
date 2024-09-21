import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, message, Space } from "antd";
import React, { useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { IoIosPricetag } from "react-icons/io";
import { useDispatch } from "react-redux";
import { sortProducts, searchProducts } from "../app/store";
import {
  FaSortAmountDown,
  FaSortAmountDownAlt,
  FaSortAmountUp,
} from "react-icons/fa";
const { Search } = Input;

const FilterSection = () => {
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    const selectedSortBy = e.key;
    setSortBy(selectedSortBy);

    dispatch(sortProducts({ sortBy: selectedSortBy, sortOrder: sortOrder }));
  };

  const handleSort = () => {
    const selectedSortOrder = sortOrder == "asc" ? "desc" : "asc";
    setSortOrder(selectedSortOrder);
    console.log(selectedSortOrder);

    dispatch(sortProducts({ sortBy: sortBy, sortOrder: selectedSortOrder }));
  };

  const onSearch = (value) => {
    setSearchValue(value);
    dispatch(searchProducts(value));
  };

  const items = [
    {
      label: "Price",
      key: "price",
      icon: <IoIosPricetag />,
    },
    {
      label: "Stock",
      key: "stock",
      icon: <AiOutlineStock />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="flex justify-center">
      <div className="border border-blue-400 border-2 rounded-xl w-full flex flex-col space-y-3  justify-between p-4 md:flex-row md:w-1/2 md:items-center md:space-y-0 ">
        <div>
          <Search
            placeholder="Search Case"
            allowClear
            enterButton="Search"
            size="large"
            className="w-full"
            // value={searchValue}
            // onSearch={}
            onSearch={onSearch}
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div>Sort By: </div>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                <div className="capitalize">{sortBy}</div>
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Button
            type="text"
            onClick={handleSort}
            icon={
              sortOrder == "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
