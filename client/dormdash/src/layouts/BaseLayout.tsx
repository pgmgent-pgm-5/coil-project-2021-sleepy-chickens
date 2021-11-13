import styled from "styled-components";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/footer/Footer";

import { motion } from "framer-motion";
import { useHistory } from "react-router";

const MainLayout = styled.main`
  max-width: ${(props) => props.theme.width.large};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 0 3rem;
  }
`;

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </motion.div>
  );
};

export default BaseLayout;
