const pageHeader = document.getElementById('pageHeader')
const notificationPanel = document.getElementById("notificationPanel")
const cta = document.getElementById("notificationCTA")

export default {
    handleScroll: () => {
        const isNotificationHidden = window.getComputedStyle(notificationPanel).position === "absolute"
        if (isNotificationHidden) {
            return;
        }

        if (window.pageYOffset > 0) {
            notificationPanel.style.position = "fixed";
            notificationPanel.style.borderBottom = "1px solid #a09a9a";
            pageHeader.style.marginTop = `${notificationPanel.offsetHeight}px`;
        } else {
            notificationPanel.style.position = "relative";
            notificationPanel.style.borderBottom = "unset";
            pageHeader.style.marginTop = "0";
        }
    },
    init: () => {
        notificationPanel.style.transition = "all .5s ease-out";
        notificationPanel.style.top = "0"; // Make sure notification is on top no matter its position is fixed, or relative to parent.
        cta.addEventListener('click', () => {
            notificationPanel.style.transform = "translateY(-100%)"
            notificationPanel.style.position = "absolute"
        })
    }
}