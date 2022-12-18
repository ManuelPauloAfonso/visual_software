import Navbar from "../navbar";
import { Container, Content } from "./style";
import { ReactNode } from "react";
import Header from "../header";

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
          {children}
        </Content>
      </Container>
    </>
  )
}