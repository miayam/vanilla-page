import newsLetter from "./tasks/news_letter"
import lazyLoadedBackground from "./tasks/lazy_loaded_background"
import stickyHeader from "./tasks/sticky_header"

// Import styling here, so Webpack can do something about it.
import "../css/index.scss"

window.onload = () => {
    lazyLoadedBackground();
    stickyHeader();
    newsLetter.init();
}

window.addEventListener('scroll', () => {
    newsLetter.handleScroll();
})
