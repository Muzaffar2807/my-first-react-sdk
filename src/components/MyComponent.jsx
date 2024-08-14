class HelloWorld extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        h1 {
          color: blue;
        }
      </style>
      <h1>Hello, World!</h1>
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("hello-world", HelloWorld);
