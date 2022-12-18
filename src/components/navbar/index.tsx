import { Container } from "./style";
import { RiLayout5Fill } from "react-icons/ri"
import { MdOutlineHomeWork } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { FaUserAlt } from 'react-icons/fa'
import { CgMenuGridR } from 'react-icons/cg'
import { AiOutlineGift } from 'react-icons/ai'
import { SlHandbag } from 'react-icons/sl'
import { useLocation, useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../routes/paths";



export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (route: string) => {
    if (location.pathname === route) {
      return '#004b5f'
    } else {
      return '#b9b9b9'
    }
  }

  return (
    <>
      <Container>
        <div>
          <RiLayout5Fill
            onClick={() => navigate(DASHBOARD.home)}
            color={isActive(DASHBOARD.home)}
            fontSize={20}
          />

          <MdOutlineHomeWork
            onClick={() => navigate(DASHBOARD.erp)}
            color={isActive(DASHBOARD.erp)}
            fontSize={20}
          />

          <SiHomeassistantcommunitystore
            onClick={() => navigate(DASHBOARD.store)}
            color={isActive(DASHBOARD.store)}
            fontSize={20}
          />
          <FaUserAlt
            onClick={() => navigate(DASHBOARD.profile)}
            color={isActive(DASHBOARD.profile)}
            fontSize={20}
          />

          <CgMenuGridR
            onClick={() => navigate(DASHBOARD.products)}
            color={isActive(DASHBOARD.products)}
            fontSize={20}
          />

          <AiOutlineGift
            onClick={() => navigate(DASHBOARD.gifts)}
            color={isActive(DASHBOARD.gifts)}
            fontSize={20}
          />
          
          <SlHandbag
            onClick={() => navigate(DASHBOARD.bags)}
            color={isActive(DASHBOARD.bags)}
            fontSize={20}
          />
        </div>
      </Container>
      
    </>

  )
}