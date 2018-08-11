(async () => {
  const template = await import("/assets/shared/js/template.js");
  window.onTemplateLoaded = template.onTemplateLoaded;
})();
