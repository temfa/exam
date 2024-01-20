import { Container } from "@mui/material";
import React from "react";

const ContainerLayout = ({ children, type }: { children: React.ReactNode; type: boolean }) => {
  return (
    <>
      {type ? (
        <Container maxWidth="lg">{children}</Container>
      ) : (
        <Container maxWidth="lg" sx={{ py: 10 }}>
          {children}
        </Container>
      )}
    </>
  );
};

export default ContainerLayout;
