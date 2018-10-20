let utils = {
  getTemplate(templateId) {
    let template = document.getElementById(templateId);
    return template.content.cloneNode(true);
  }
};

export default utils;
