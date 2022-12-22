import { useContext } from "react";
import { ProductsContext, ProductsContextProvider } from "../contexts";




export const useProductsGet = () => useContext(ProductsContext)