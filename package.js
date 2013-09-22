Package.describe({
  summary: "A simple i18n package: Call __('...') to translate your message everywhere."
});

Package.on_use(function (api, where) {
  where = 'client';
  api.use(['underscore','session'], where);
  api.add_files('translator.js', where);
  api.export('__');
});
