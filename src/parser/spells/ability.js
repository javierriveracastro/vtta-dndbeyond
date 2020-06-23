import DICTIONARY from "../dictionary.js";

// is there a spell casting ability?
export function hasSpellCastingAbility(spellCastingAbilityId) {
  return DICTIONARY.character.abilities.find((ability) => ability.id === spellCastingAbilityId) !== undefined;
}

// convert spellcasting ability id to string used by vtta
export function convertSpellCastingAbilityId(spellCastingAbilityId) {
  return DICTIONARY.character.abilities.find((ability) => ability.id === spellCastingAbilityId).value;
}

// search through classinfo and determine spellcasting ability
export function getSpellCastingAbility(classInfo) {
  let spellCastingAbility = undefined;
  if (hasSpellCastingAbility(classInfo.definition.spellCastingAbilityId)) {
    spellCastingAbility = convertSpellCastingAbilityId(classInfo.definition.spellCastingAbilityId);
  } else if (
    classInfo.subclassDefinition &&
    hasSpellCastingAbility(classInfo.subclassDefinition.spellCastingAbilityId)
  ) {
    // Arcane Trickster has spellcasting ID granted here
    spellCastingAbility = convertSpellCastingAbilityId(classInfo.subclassDefinition.spellCastingAbilityId);
  } else {
    // special cases: No spellcaster, but can cast spells like totem barbarian, default to wis
    spellCastingAbility = "wis";
  }
  return spellCastingAbility;
}
