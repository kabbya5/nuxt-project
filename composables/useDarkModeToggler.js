
const theme = localStorage.getItem('theme') || null;
const isDarkMode = null
if(theme == 'dark'){
    isDarkMode == true;
}

function darkModeToggler(theme){
    localStorage.setitem('theme',theme);

    return theme === 'dark' ? true ? false;
}
    
export const useDarkModeToggler = () => {
    isDarkMode
};