import { Container } from "@mui/material";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header></header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
