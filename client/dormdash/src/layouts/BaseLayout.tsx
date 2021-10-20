import styled from 'styled-components';

import Footer from '../components/layout/footer/Footer';

const MainLayout = styled.div`
  max-width: ${props => props.theme.width.elarge};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (min-width: ${props => props.theme.width.medium}) {
    padding: 0 3rem;
  }
`;

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <header>Header</header>
      <MainLayout>
        { children }
      </MainLayout>
      <Footer />
    </>
  )
}

export default BaseLayout
