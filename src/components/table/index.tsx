import { Container } from "./style";
import { FiNavigation } from 'react-icons/fi'
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
        {/* 
         {
          products.map((product, id) => {
            console.log(product)
            return (
              <tr key={product.id} >
                <td>{product.sku}</td>
                <td>3312</td>
                <td>Marca 1</td>
                <td>R$ 12,00</td>
                <td>1</td>
                <td><FiNavigation color="#90EE90" fontSize={20} /></td>
                <td><SlOptionsVertical fontSize={20} /></td>

              </tr>
            )
          })
        }   
        */}
      </tbody>

    </Container >
  )
}