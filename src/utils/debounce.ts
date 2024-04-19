export function debounce(func: Function, ms: number) {
    let timeout = 0;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}
