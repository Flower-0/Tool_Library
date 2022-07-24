export function isElement(params) {
    return typeof HTMLElement === "object" ? params instanceof HTMLElement : params && typeof params === "object" && params.nodeType === 1 && typeof params.nodeName === 'string'
}

