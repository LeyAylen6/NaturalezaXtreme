import { IconButton, Menu, MenuButton, MenuItem, MenuList,Avatar, Box } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'



const MenuProfile=()=>{

  return (
    <Menu>
<MenuButton as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'/>
<MenuList fontSize="20px">
  
  <MenuItem >
  My Profile
  </MenuItem>
  <MenuItem>
  My Shopping
  </MenuItem>
</MenuList>


    </Menu>
  )
}
export default MenuProfile;