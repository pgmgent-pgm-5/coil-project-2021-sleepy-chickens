import styled from "styled-components";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/footer/Footer";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useUser } from "../context/AuthenticationContext";

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
  const handleUserContext = useUser();

  const fetchAuthentication = async () => {
    if (handleUserContext!.state.id === undefined) {
      // Check if user is logged in, if not, fetch session state
      const request = await fetch(
        "https://dormdash.onrender.com/authenticated",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const response = await request.json();
      if (response.statusCode === 403) {
        handleUserContext!.dispatch({
          type: "setUser",
          payload: { email: undefined, id: undefined },
        });
      } else {
        handleUserContext!.dispatch({
          type: "setUser",
          payload: { email: response.email, id: response.id },
        });
      }
    }
  };

  useEffect(() => {
    fetchAuthentication();
  }, []);

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
