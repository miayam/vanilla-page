import { storage } from '../utils'

// A function to tell how long time has elapsed in minutes.
// `now` and `then` is a date object (Date).  
const timeDiffInMinutes = (now, then) => {
    const diff = now.getTime() - then.getTime(); // in milliseconds
    const diffInSeconds = diff / 1000;
    const diffInMinutes = diffInSeconds / 60;
    return diffInMinutes;
}

const hasPassed = (minutes) => (diff) => (now, then) => {
    return diff(now, then) >= minutes;
}

// A function that will take `now` and `then` date object and then
// tell weather the time has passed 10 minutes or not.
export const hasPassed10Minutes = hasPassed(0.1)(timeDiffInMinutes)

export const closeNewsLetter = () => {
    const closeButton = document.getElementById('closeButton');
    const newsLetter = document.getElementById('newsLetter');
    closeButton.addEventListener('click', () => {
        storage.setItem('landing_page', { enabled: false, open: false, time: new Date() })
        newsLetter.style.bottom = `${newsLetter.offsetHeight * -1}px`;
        newsLetter.style.visibility = "hidden"
    })
}

const isObject = (value) => {
    return value && typeof value === 'object' && value.constructor === Object;
}

const storageHasBeenInitialized = () => {
    return isObject(storage.getItem('landing_page'))
}

const initializeStorage = () => {
    if (storageHasBeenInitialized()) {
        console.log("No need storage initialization.")
        return;
    }

    storage.setItem('landing_page', { enabled: true, open: false })
    console.log("Storage initialized!", storage.getItem('landing_page'))
}

const newsLetter = {
    handleScroll: () => {
        const landingPageStorage = storage.getItem('landing_page')
        const newsLetter = document.getElementById('newsLetter');
        const maxHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const hasPassedOneThirdOfMaxHeight = (window.pageYOffset > (maxHeight / 3.0))
        const canOpenNewsLetter = storageHasBeenInitialized() &&
            !landingPageStorage.enabled &&
            landingPageStorage.time &&
            hasPassed10Minutes(new Date(), new Date(landingPageStorage.time))

        // If LocalStorage is cleared by user, then return
        if (!storageHasBeenInitialized) {
            return;
        }

        if (canOpenNewsLetter) {
            storage.setItem('landing_page', { enabled: true, time: new Date() })
        }

        if (hasPassedOneThirdOfMaxHeight && landingPageStorage.enabled && !landingPageStorage.open) {
            storage.setItem('landing_page', { ...landingPageStorage, open: true })
            newsLetter.style.bottom = "0"
            newsLetter.style.visibility = "visible"
        }

        if (landingPageStorage.open) {
            newsLetter.style.bottom = "0"
            newsLetter.style.visibility = "visible"
        }

    },
    init: () => {
        const newsLetter = document.getElementById('newsLetter');
        // Hide news letter by default
        newsLetter.style.bottom = `${newsLetter.offsetHeight * -1}px`;
        newsLetter.style.transition = "all .5s ease-out";
        closeNewsLetter();
        initializeStorage();
    }
}

export default newsLetter;