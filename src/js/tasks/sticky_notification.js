const pageHeader = document.getElementById('pageHeader')
const notificationPanel = document.getElementById("notificationPanel")
const cta = document.getElementById("notificationCTA")

export default {
    handleScroll: () => {
        // Get margin top of notification panel.
        const notificationMarginTop = parseInt(window.getComputedStyle(notificationPanel).marginTop, 10);

        // If notification panel has been hidden (negatively positioned), don't bother to handle scrolling event.
        if (notificationMarginTop < 0) {
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
            notificationPanel.style.marginTop = `${notificationPanel.offsetHeight * -1}px`;
        })
    }
}