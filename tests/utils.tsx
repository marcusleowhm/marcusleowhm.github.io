export const setWindowWidth = (width: number): void => {
    Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: width,
    })
    window.dispatchEvent(new Event("resize"));
}