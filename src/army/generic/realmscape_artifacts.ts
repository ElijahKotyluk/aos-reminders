import { TArtifacts } from 'types/army'
import { CHARGE_PHASE, COMBAT_PHASE, HERO_PHASE, SAVES_PHASE, SHOOTING_PHASE } from 'types/phases'
import { AQSHY, CHAMON, GHUR, GHYRAN, HYSH, SHYISH, ULGU } from 'types/realmscapes'

const RealmArtifacts: TArtifacts = [
  {
    name: `Everspring Diadem (${GHYRAN})`,
    effects: [
      {
        name: `Everspring Diadem (${GHYRAN})`,
        desc: `In your hero phase, you can heal 1 wound allocated to the bearer.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Predator's Torc (${GHUR})`,
    effects: [
      {
        name: `Predator's Torc (${GHUR})`,
        desc: `You can reroll charge rolls for the bearer.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Plate of Perfect Protection (${CHAMON})`,
    effects: [
      {
        name: `Plate of Perfect Protection (${CHAMON})`,
        desc: `If a weapon used for an attack that targets the bearer has a Rend characteristic of -1, change the Rend characteristic for that attack to '-'`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Incandescent Rageblade (${AQSHY})`,
    effects: [
      {
        name: `Incandescent Rageblade (${AQSHY})`,
        desc: `Pick 1 of the bearer's melee weapons. If the unmodified hit roll for an attack made by that weapon is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Gravesand Brooch (${SHYISH})`,
    effects: [
      {
        name: `Gravesand Brooch (${SHYISH})`,
        desc: `You can reroll save rolls of 1 for attacks that target the bearer.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  {
    name: `Syari Trueblade (${HYSH})`,
    effects: [
      {
        name: `Syari Trueblade (${HYSH})`,
        desc: `You can reroll hit rolls of 1 for attacks made with a melee weapon by the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Trickster's Foil (${ULGU})`,
    effects: [
      {
        name: `Trickster's Foil (${ULGU})`,
        desc: `You can reroll wound rolls of 1 for attacks made with a melee weapon by the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
]

export default RealmArtifacts
