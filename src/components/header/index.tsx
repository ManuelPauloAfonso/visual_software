import { Container } from "./style";
import { AiOutlineMenu } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'



export default function Header() {
  return (
    <Container>
      <div>
        <AiOutlineMenu fontSize={20} />
        <span>MeuerpOnlined</span>
      </div>
      <div>
        <RxAvatar fontSize={20} />
        <span>manuelpauloafonso29@gmail.com</span>
      </div>
    </Container>
  )
}