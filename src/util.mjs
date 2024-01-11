import { Base64 } from "./Base64.mjs";

export function deleteCookie(name) {
    document.cookie = `${name}=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export function setCookie(name, value) {
    document.cookie = `${name}=${Base64.encode(value)};Expires=Thu, 01 Jan 2100 00:00:01 GMT;Path=/;`;
}

export function getCookie(name, defaultValue) {
    let key = name + '=';
    let cookie = document.cookie.split(';')
        .map(c => c.trim())
        .find(cookie => cookie.startsWith(key));
    if (cookie) {
        return Base64.decode(cookie.substring(key.length));
    } else if (defaultValue !== undefined) {
        setCookie(name, defaultValue instanceof Function ? defaultValue() : defaultValue);
        return defaultValue;
    }
    return undefined;
}

export async function fetchText(uri) {
    let response = await fetch(uri);
    return await response.text();
}

export function createUID() {
    let now = Date.now().toString();
    let rand = Math.random().toString();
    return `sid-${now.substring(now.length-6)}-${rand.substring(rand.length-6)}`;
}

export function serialize(obj, ignoreKeys) {
    function replacer(key, value) {
        if (ignoreKeys?.has(key)) {
            return null;
        }
        if (value instanceof Set) {
            return { type: 'Set', items: Array.from(value) }
        } else if (value instanceof Map) {
            return { type: 'Map', items: [...value.entries()] }
        }
        return value;
    }
    return JSON.stringify(obj, replacer);
}

export function deserialize(s) {
    function reviver(key, value) {
        if (value?.type == 'Set') {
            return new Set(value.items);
        } else if (value?.type == 'Map') {
            return new Map(value.items);
        }
        return value;
    }
    return JSON.parse(s, reviver);
}


export function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        window.clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        let textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand("copy");
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

export function setFavicon(icon) {
    let newFavicon = `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>${icon}</text>
        </svg>`;
    let faviconLink = document.querySelector(`head > link[rel='icon']`);
    faviconLink.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);
}
