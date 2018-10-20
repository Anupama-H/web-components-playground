// import utils from "./utils";

let utils = {
  getTemplate(templateId) {
    let template = document.getElementById(templateId);
    return template.content.cloneNode(true);
  }
};

class ClockComponent extends HTMLElement {
  constructor () {
    super();
    let templateNode = utils.getTemplate("clock-template");
    let shadowElem = this.attachShadow({ mode: "open" });
    shadowElem.appendChild(templateNode);
    
    this.hoursNode = shadowElem.querySelector("#hours");
    this.minutesNode = shadowElem.querySelector("#minutes");
    this.secondsNode = shadowElem.querySelector("#seconds");
    this.startClock();
  }
  startClock () {
    this.timer = setInterval(this.renderTime.bind(this), 1000);
    this.renderTime();
  }
  renderTime () {
    let date = new Date();
    this.hoursNode.textContent = date.getHours();
    this.minutesNode.textContent = date.getMinutes();
    this.secondsNode.textContent = date.getSeconds();
  }
  disconnectedCallback () {
    /* cleanup setInterval */
    clearInterval(this.timer);
  }
}

customElements.define("clock-component", ClockComponent);
