(async () => {
  const template = await import("/assets/shared/js/template.js");

  //run program
  window.onTemplateLoaded = template.onTemplateLoaded;
})();
