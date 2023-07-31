import data from './avdata.json';

Hooks.on('ready', () => {
  const localized = data.map((e) => {
    e.label = game.i18n.localize(e.label);
    return e;
  });
  game.modules.get('obs-utils').api.setAVData(localized);
});
