const TRAITS = require("../../data/traits.json");
const DEFAULT_PROPERTIES = {
  dragonId: undefined,
  nickname: "unnamed",
  generationId: undefined,
  get birthdate() {
    return new Date();
  },
  get defaultTraits() {
    return TRAITS.reduce((traits, { type, values }) => {
      return [
        ...traits,
        {
          traitType: type,
          traitValue: values[Math.floor(Math.random() * values.length)],
        },
      ];
    }, []);
  },
};
class Dragon {
  constructor({ dragonId, birthdate, nickname, traits, generationId } = {}) {
    this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.defaultTraits;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
  }
}

module.exports = Dragon;
