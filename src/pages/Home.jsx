import { Button, ConfigProvider, Space } from "antd";
import { createStyles } from "antd-style";
import React from "react";
import { DiPhonegap } from "react-icons/di";
import { useNavigate } from "react-router-dom";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const Home = () => {
  const navigate = useNavigate();

  const { styles } = useStyle();
  return (
    <div style={{height: '75vh'}} className=" flex items-center justify-center flex-col gap-14">
      <div className="text-3xl font-bold uppercase md:text-5xl">Cases For Iphone</div>
      <ConfigProvider
        button={{
          className: styles.linearGradientButton,
        }}
      >
        <Button
          type="primary"
          size="large"
          icon={<DiPhonegap color="white" />}
          onClick={() => navigate("allproducts")}
          className="text-lg p-5 md:text-2xl"
        >
          Explore Cases
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default Home;
