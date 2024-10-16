const useDarkMode = () => {
    const isDarkMode = useState("darkMode", () => true);

    const togglerDarkMode = () =>{
        isDarkMode.value = !isDarkMode.value
    }

    return {
        isDarkMode,
        togglerDarkMode,
    };
};

export default useDarkMode;