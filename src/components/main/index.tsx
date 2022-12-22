import Navbar from "../navbar";
import { Container, Content } from "./style";
import { ReactNode } from "react";
import Header from "../header";
import Navproducts from "../navproducts";

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <>
      <Header />
      <Container>
        <Navbar />
        <Content>
          <Navproducts />
          {children}
        </Content>
      </Container>
    </>
  )
}