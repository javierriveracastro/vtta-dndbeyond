export default async function () {
  let compendiumCreated = false;

  let compendiumName = game.settings.get("vtta-dndbeyond", "entity-spell-compendium");
  let compendium = game.packs.find((pack) => pack.collection === compendiumName);

  if (!compendium) {
    compendiumCreated = true;
    // create a compendium for the user
    await Compendium.create({ entity: "Item", label: "My DDB Spells", name: "ddb-spells", package: "world" });
    await game.settings.set("vtta-dndbeyond", "entity-spell-compendium", "world.ddb-spells");
  }

  compendiumName = game.settings.get("vtta-dndbeyond", "entity-item-compendium");
  compendium = game.packs.find((pack) => pack.collection === compendiumName);

  if (!compendium) {
    compendiumCreated = true;
    // create a compendium for the user
    await Compendium.create({ entity: "Item", label: "My DDB Items", name: "ddb-items", package: "world" });
    await game.settings.set("vtta-dndbeyond", "entity-item-compendium", "world.ddb-items");
  }

  compendiumName = game.settings.get("vtta-dndbeyond", "entity-monster-compendium");
  compendium = game.packs.find((pack) => pack.collection === compendiumName);

  if (!compendium) {
    compendiumCreated = true;
    // create a compendium for the user
    await Compendium.create({ entity: "Actor", label: "My DDB Monsters", name: "ddb-monsters", package: "world" });
    await game.settings.set("vtta-dndbeyond", "entity-monster-compendium", "world.ddb-monsters");
  }

  if (compendiumCreated) location.reload();
}
