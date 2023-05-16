export const addClassesWhenInViewport = (element, classNames) => {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isElementInViewport(element)) {
            element.classList.add(...classNames);
            // Remove the scroll event listener after adding the classes
            window.removeEventListener("scroll", handleScroll);
        }
    }

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
}