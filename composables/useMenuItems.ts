import type { MenuData } from '~/types/menu'; 
import menuData from '~/data/menuItems.json';

const menus: MenuData = menuData;

export const useMenuItems = () =>{
    return {
        menus,
    };
};