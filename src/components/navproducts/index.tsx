import { Container } from "./style";
import { IoMdAdd } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Navproducts() {
  return (
    <Container>
      <div className="search">
        <AiOutlineSearch fontSize={20} />
        <input placeholder="buscar registro" type="text" />
      </div>
      <div>
        <button>
          <IoMdAdd color="#FFFFFF" fontSize={20} />
          Novo produto
        </button>
      </div>
    </Container>
  )
}