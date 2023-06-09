import { IconButton, Menu, MenuButton, MenuItem, MenuList, Avatar, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const MenuProfile = () => {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="solid" bg={"gray.600"} color={"black.300"} />
      <MenuList fontSize="20px">
        <MenuItem onClick={() => navigate("/account")}>My Account</MenuItem>
        <MenuItem onClick={() => navigate("/myshopping")}>Shopping</MenuItem>
        <MenuItem onClick={() => navigate("/favorites")}>Favorites</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default MenuProfile;
