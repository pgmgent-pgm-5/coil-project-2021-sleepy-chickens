import styled from "styled-components";
import Header from "../components/layout/Header/Header";

import Footer from "../components/layout/footer/Footer";

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
    <>
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </>
  );
};

export default BaseLayout;
