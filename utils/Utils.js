export const scrollToTop = () => {
    const fn = () => {
        if (document.documentElement.scrollTop > 0){
            window.scrollBy(0, -50);
        } else {
            clearInterval(i);
        }
    };

    const i = setInterval(fn, 10);
};