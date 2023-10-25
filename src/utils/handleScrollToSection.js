export const handleScrollToSection = (section = null) => {
    if (section) {
        const targetElement = document.getElementById(section);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
            console.warn(`No se encontró el elemento con ID: ${section}`);
        }
    } else {
        window.scrollTo(0, 0);
    } 
};