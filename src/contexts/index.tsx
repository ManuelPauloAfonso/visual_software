import { Children, createContext, useState } from "react";
import api from "../service/api";
import { ApplicationToken, CompanyToken } from "../service/config";
import { Product, ProductsProps, ProductsPropsState, PropsChildren } from "../types/types";




const ProductsContext = createContext<ProductsPropsState>({} as ProductsPropsState)

const ProductsContextProvider = ({ children }: PropsChildren) => {
  const [products, setProducts] = useState([] as Product[])

  async function getProducts() {
    try {
      const res = await api.get('produtos/', {
        headers: {
          'Authorization': `${CompanyToken}, ${ApplicationToken}`,

        }
      });
      setProducts(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ProductsContext.Provider value={{ products, setProducts, getProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContextProvider, ProductsContext }