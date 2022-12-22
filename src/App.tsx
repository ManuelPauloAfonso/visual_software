
import { ProductsContextProvider } from "./contexts"
import Routes from "./routes/routes"
import { GlobalStyle } from "./style/gobal"


function App() {

  return (
    <>
      <ProductsContextProvider>
        <GlobalStyle />
        <Routes />
      </ProductsContextProvider>
    </>
  )
}

export default App
