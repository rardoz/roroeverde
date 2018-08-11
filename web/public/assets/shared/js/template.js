"use-strict";

const onTemplateLoaded = link => {
  var template = link.import.querySelector("template");
  var clone = document.importNode(template.content, true);
  document.querySelector("body").appendChild(clone);
};

export { onTemplateLoaded };
