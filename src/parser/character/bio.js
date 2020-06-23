import DICTIONARY from "../dictionary.js";

export function getBackground(data) {
  if (data.character.background.hasCustomBackground === false) {
    if (data.character.background.definition !== null) {
      return data.character.background.definition.name || "";
    } else {
      return "";
    }
  } else {
    return data.character.background.customBackground.name || "";
  }
}

export function getTrait(data) {
  let result = data.character.traits.personalityTraits;
  if (result !== null) {
    result = result
      .split("\n")
      .map((e) => "<p>" + e + "</p>")
      .reduce((prev, cur) => prev + cur);
    result = result.replace("<p></p>", "");
  } else {
    result = "";
  }
  return result;
}

export function getIdeal(data) {
  let result = data.character.traits.ideals;
  if (result !== null) {
    result = result
      .split("\n")
      .map((e) => "<p>" + e + "</p>")
      .reduce((prev, cur) => prev + cur);
    result = result.replace("<p></p>", "");
  } else {
    result = "";
  }
  return result;
}

export function getBond(data) {
  let result = data.character.traits.bonds;
  if (result !== null) {
    result = result
      .split("\n")
      .map((e) => "<p>" + e + "</p>")
      .reduce((prev, cur) => prev + cur);
    result = result.replace("<p></p>", "");
  } else {
    result = "";
  }
  return result;
}

export function getFlaw(data) {
  let result = data.character.traits.flaws;
  if (result !== null) {
    result = result
      .split("\n")
      .map((e) => "<p>" + e + "</p>")
      .reduce((prev, cur) => prev + cur);
    result = result.replace("<p></p>", "");
  } else {
    result = "";
  }
  return result;
}

/**
 * Gets the character's alignment
 * Defaults to Neutral, if not set in DDB
 * @todo: returns .name right now, should switch to .value once the DND5E options are fully implemented
 */
export function getAlignment(data) {
  let alignmentID = data.character.alignmentId || 5;
  let alignment = DICTIONARY.character.alignments.find((alignment) => alignment.id === alignmentID); // DDBUtils.alignmentIdtoAlignment(alignmentID);
  return alignment.name;
}

export function getBiography(data) {
  let format = (heading, text) => {
    text = text
      .split("\n")
      .map((text) => `<p>${text}</p>`)
      .join("");
    return `<h2>${heading}</h2>${text}`;
  };

  let personalityTraits = data.character.traits.personalityTraits
    ? format("Personality Traits", data.character.traits.personalityTraits)
    : "";
  let ideals = data.character.traits.ideals ? format("Ideals", data.character.traits.ideals) : "";
  let bonds = data.character.traits.bonds ? format("Bonds", data.character.traits.bonds) : "";
  let flaws = data.character.traits.flaws ? format("Flaws", data.character.traits.flaws) : "";

  let traits =
    personalityTraits !== "" || ideals !== "" || bonds !== "" || flaws !== ""
      ? "<h1>Traits</h1>" + personalityTraits + ideals + bonds + flaws
      : "";

  let backstory =
    data.character.notes.backstory !== null ? "<h2>Backstory</h2><p>" + data.character.notes.backstory + "</p>" : "";

  if (data.character.background.hasCustomBackground === true) {
    let bg = data.character.background.customBackground;

    let result = bg.name ? "<h1>" + bg.name + "</h1>" : "";
    result += bg.description ? "<p>" + bg.description + "</p>" : "";
    if (bg.featuresBackground) {
      result += "<h2>" + bg.featuresBackground.name + "</h2>";
      result += bg.featuresBackground.shortDescription.replace("\r\n", "");
      result += "<h3>" + bg.featuresBackground.featureName + "</h3>";
      result += bg.featuresBackground.featureDescription.replace("\r\n", "");
    }
    if (
      bg.characteristicsBackground &&
      bg.featuresBackground &&
      bg.featuresBackground.entityTypeId != bg.characteristicsBackground.entityTypeId
    ) {
      result += "<h2>" + bg.characteristicsBackground.name + "</h2>";
      result += bg.characteristicsBackground.shortDescription.replace("\r\n", "");
      result += "<h3>" + bg.characteristicsBackground.featureName + "</h3>";
      result += bg.characteristicsBackground.featureDescription.replace("\r\n", "");
    }

    return {
      public: result + backstory + traits,
      value: result + backstory + traits,
    };
  } else if (data.character.background.definition !== null) {
    let bg = data.character.background.definition;

    let result = "<h1>" + bg.name + "</h1>";
    result += bg.shortDescription.replace("\r\n", "");
    if (bg.featureName) {
      result += "<h2>" + bg.featureName + "</h2>";
      result += bg.featureDescription.replace("\r\n", "");
    }
    return {
      public: result + backstory + traits,
      value: result + backstory + traits,
    };
  } else {
    return {
      public: "" + backstory + traits,
      value: "" + backstory + traits,
    };
  }
}
