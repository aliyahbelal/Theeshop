
const msg = 'Hello, world!';

if (typeof document !== 'undefined' && document.body) {
    const el = document.createElement('div');
    el.textContent = msg;
    document.body.appendChild(el);
} else if (typeof console !== 'undefined') {
    console.log(msg);
}