import { IconButton, Menu, MenuButton, MenuItem, MenuList,Avatar, Box } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import { useNavigate} from "react-router-dom";



const MenuProfile=()=>{

  const navigate = useNavigate()

  return (
    <Menu>
<MenuButton as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'/>
<MenuList fontSize="20px">
  
  <MenuItem onClick={()=>navigate("/account")}>
  My Account
  </MenuItem>
  <MenuItem onClick={()=>navigate("/myshopping")}>
  My Shopping
  </MenuItem>
</MenuList>


    </Menu>
  )
}
export default MenuProfile;