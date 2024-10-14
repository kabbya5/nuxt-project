export interface MenuItem {
    id: number;
    name: string;
    image_url: string;
}
  
export interface MenuCategory {
    menuType: string;
    items: MenuItem[];
}
  
export type MenuData = MenuCategory[];