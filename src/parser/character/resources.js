import DICTIONARY from "../dictionary.js";

export function getResources(data, character) {
  // get all resources
  let resources = [data.character.actions.race, data.character.actions.class, data.character.actions.feat]
    .flat()
    // let resources = data.character.actions.class
    .filter((action) => action.limitedUse && (action.limitedUse.maxUses || action.limitedUse.statModifierUsesId))
    .map((action) => {
      let maxUses;
      if (action.limitedUse.statModifierUsesId) {
        const ability = DICTIONARY.character.abilities.find(
          (ability) => ability.id === action.limitedUse.statModifierUsesId
        ).value;
        maxUses = character.data.abilities[ability].mod;
      } else {
        maxUses = action.limitedUse.maxUses;
      }

      return {
        label: action.name,
        value: maxUses - action.limitedUse.numberUsed,
        max: maxUses,
        sr: action.limitedUse.resetType === 1,
        lr: action.limitedUse.resetType === 1 || action.limitedUse.resetType === 2,
      };
    })
    // sort by maxUses, I guess one wants to track the most uses first, because it's used more often
    .sort((a, b) => {
      if (a.max > b.max) return -1;
      if (a.max < b.max) return 1;
      return 0;
    })
    // get only the first three
    .slice(0, 3);

  let result = {
    primary: resources.length >= 1 ? resources[0] : { value: 0, max: 0, sr: false, lr: false, label: "" },
    secondary: resources.length >= 2 ? resources[1] : { value: 0, max: 0, sr: false, lr: false, label: "" },
    tertiary: resources.length >= 3 ? resources[2] : { value: 0, max: 0, sr: false, lr: false, label: "" },
  };
  return result;
}
