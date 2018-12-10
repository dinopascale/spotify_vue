export const getHashParams = () => {
    let hashParams = {}
    var e = /([^&;=]+)=?([^&;]*)/g
    const r = /([^&;=]+)=?([^&;]*)/g
    const q = window.location.hash.substring(1)

    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2])
    }

    return hashParams
}

export const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
}