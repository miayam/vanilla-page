import newsLetter from "./tasks/news_letter"
import stickyNotification from "./tasks/sticky_notification"

// Import styling here, so Webpack can do something about it.
import "../css/index.scss"

window.onload = () => {
    newsLetter.init();
    stickyNotification.init();
}

window.addEventListener('scroll', () => {
    newsLetter.handleScroll();
    stickyNotification.handleScroll();
})