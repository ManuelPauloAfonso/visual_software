import { Container, Maincontainer } from "./style";
import { BiCheck } from 'react-icons/bi'
import { SlOptionsVertical } from 'react-icons/sl'
import { useProductsGet } from "../../hooks";
import { useEffect } from "react";

export default function Table() {
  const { products, getProducts } = useProductsGet()

  useEffect(() => {
    getProducts()
  }, [])
  console.log(products)

  return (
    <Maincontainer>
      <Container>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Descrição</th>
            <th>Marca</th>
            <th>Preço</th>
            <th>Stoke</th>
            <th>Ativo</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, id) => {
              return (
                <tr key={product.id} >
                  <td>{product.sku}</td>
                  <td>{product.descricao}</td>
                  <td>{product.marca.nome}</td>
                  <td>{product.precoUnitario}</td>
                  <td>{product.estoqueTotal}</td>
                  <td><BiCheck color="#90EE90" fontSize={20} /></td>
                  <td><SlOptionsVertical fontSize={20} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </Container >
    </Maincontainer>
  )
}