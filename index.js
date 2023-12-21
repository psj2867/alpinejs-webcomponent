
export default function (Alpine) {
    for (const tpl of document.querySelectorAll('template[x-webcomponent]')) {
        customElements.define(
            tpl.getAttribute('x-webcomponent'),
            class extends HTMLElement {
                connectedCallback() {
                    const shadow = this.attachShadow({ mode: 'open' })
                    shadow.appendChild(tpl.content.cloneNode(true))
                    Alpine.nextTick(() => Alpine.initTree(shadow));
                }
            }
        );
    }
}
