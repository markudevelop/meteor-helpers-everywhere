Package.describe({
  summary: "Use template helpers at template events, onCreated, onRendered, onDestroyed or plain JavaScript code",
  version: '0.0.3',
  name: 'voidale:helpers-everywhere',
  git: 'https://github.com/voidale/meteor-helpers-everywhere'
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@0.9.4");

  api.use(['blaze', 'templating'], 'client');

  api.addFiles('client.js', 'client');

  //api.export('');
});
