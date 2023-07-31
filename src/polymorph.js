Hooks.on('dnd5e.revertOriginalForm', (actor) => {
  const currentId = actor.id;
  const originalActor = actor.flags.dnd5e.originalActor;
  replaceActor(currentId, originalActor);
});

Hooks.on('dnd5e.transformActor', (from) => {
  const currentId = from.id;
  const hookId = Hooks.on('createActor', (actor) => {
    const originalActor = actor.flags?.dnd5e?.originalActor;
    if (originalActor === currentId) {
      const newId = actor.id;
      replaceActor(currentId, newId);
      Hooks.off('createActor', hookId);
    }
  });
});

function replaceActor(currentId, newId) {
  const selectedActors = game.modules.get('obs-utils').api.getSelectedActors();
  const index = selectedActors.findIndex((element) => element === currentId);
  if (index > -1) {
    selectedActors[index] = newId;
    game.modules.get('obs-utils').api.setSelectedActors(selectedActors);
  }
}
