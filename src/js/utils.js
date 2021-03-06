// Make sure that we can use localStorage or fallback to plain old JavaScript object.
// I borrow it from my friend Dongjin Jung. This is IIFE in action.
export const storage = (function () {
    try {
        const st = localStorage || {}
        return {
            setItem: (key, object) => {
                st[key] = typeof object === "string" ? object : JSON.stringify(object)
            },
            getItem: key => {
                if (!st[key]) {
                    return null
                }
                const value = st[key]

                try {
                    const parsed = JSON.parse(value)
                    return parsed
                } catch (e) {
                    return value
                }
            },
            removeItem: key => {
                if (localStorage) {
                    return localStorage.removeItem(key)
                }
                delete st[key]
            },
        }
    } catch (err) {
        console.warn(err)
        setTimeout(() => alert("Cookie disabled"), 1000)
        return {
            setItem: () => "",
            getItem: () => "",
            removeItem: () => ""
        }
    }
})()