import {
  BEASTCLAW_RAIDERS,
  BEASTS_OF_CHAOS,
  BONESPLITTERZ,
  CHAOS_GRAND_ALLIANCE,
  DAUGHTERS_OF_KHAINE,
  DEATH_GRAND_ALLIANCE,
  DESTRUCTION_GRAND_ALLIANCE,
  DISPOSSESSED,
  EVERCHOSEN,
  FLESH_EATER_COURTS,
  FYRESLAYERS,
  GLOOMSPITE_GITZ,
  GRAND_HOST_OF_NAGASH,
  GUTBUSTERS,
  IDONETH_DEEPKIN,
  IRONJAWZ,
  KHARADRON_OVERLORDS,
  KHORNE,
  LEGION_OF_BLOOD,
  LEGION_OF_NIGHT,
  LEGION_OF_SACRAMENT,
  LEGIONS_OF_AZGORH,
  LEGIONS_OF_GRIEF,
  LETHISIAN_DEFENDERS,
  MERCENARY_COMPANIES,
  NIGHTHAUNT,
  NURGLE,
  ORDER_GRAND_ALLIANCE,
  OSSIARCH_BONEREAPERS,
  SERAPHON,
  SKAVEN,
  SLAANESH,
  SLAVES_TO_DARKNESS,
  SOULBLIGHT,
  STORMCAST_ETERNALS,
  SYLVANETH,
  TAMURKHANS_HORDE,
  TZEENTCH,
  WANDERERS,
} from 'meta/factions'
import { TImportParsers } from 'types/import'

// Add common typos here
// Warscroll Builder on the left - AoS Reminders on the right
const warscrollTypoMap: TNameMap = {
  'Devoted Desciples': 'Devoted Disciples',
  'Evocators on Dracolines': 'Evocators on Celestial Dracolines',
  'Explosize Charge': 'Explosive Charge',
  'Great Bray Shaman of Slaanesh': 'Great Bray-Shaman',
  'Great Bray Shaman': 'Great Bray-Shaman',
  'Hellstriders With Claw-Spears': 'Hellstriders',
  'Hellstriders with Hellscourges': 'Hellstriders',
  'Lighntning Blast': 'Lightning Blast',
  'Magestic Horror': 'Majestic Horror (Royalty)',
  'Mannfred Mortarch of Night': 'Mannfred, Mortarch of Night',
  'Midnight Tome - Lifestealer': 'Midnight Tome',
  'Midnight Tome - Reaping Scythe': 'Midnight Tome',
  'Midnight Tome - Shademist': 'Midnight Tome',
  'Midnight Tome - Soul Cage': 'Midnight Tome',
  'Midnight Tome - Spectral Tether': 'Midnight Tome',
  'Midnight Tome - Spirit Drain': 'Midnight Tome',
  'Terrorghiest Mantle': 'Terrorgheist Mantle',
  'Tzaangor Enlightened on Disc': 'Tzaangor Enlightened',
  'Vulturnos, High King of the Deep': 'Volturnos, High King of the Deep',
  'Warrior Indomniate': 'Warrior Indominate',
}

// Azyr on the left - AoS Reminders on the right
const azyrTypoMap: TNameMap = {
  'Hellstriders With Claw-Spears': 'Hellstriders',
  'Hellstriders with Hellscourges': 'Hellstriders',
}

// Battlescribe on the left - AoS Reminders on the right
// const battlescribeTypoMap: TNameMap = {}

// Azyr helper
export const factionToAllegianceMap = {
  'Clans Eshin': 'Masters of Murder (Eshin)',
  'Clans Moulder': 'Prized Creations (Moulder)',
  'Clans Pestilens': 'Echoes of the Great Plagues (Pestilens)',
  'Clans Skryre': 'Warpstone Sparks (Skryre)',
  'Clans Verminus': 'Mighty Warlords (Verminus)',
}

// If a certain trait maps to a specific unit type, put it here
export const importUnitOptionMap = {
  'Ark of Sotek': 'Bastiladon w/ Ark of Sotek',
  'Balefire Brazier': 'Corpse Cart w/ Balefire Brazier',
  'Celestial Hammer(s)': 'Prosecutors with Celestial Hammers',
  'Cloak of Feathers': 'Skink Priest w/ Cloak of Feathers',
  'Living Whip': 'Keeper of Secrets w/ Living Whip',
  'Priestly Trappings': 'Skink Priest w/ Priestly Trappings',
  'Ritual Knife': 'Keeper of Secrets w/ Ritual Knife',
  'Shining Aegis': 'Keeper of Secrets w/ Shining Aegis',
  'Sinistrous Hand': 'Keeper of Secrets w/ Sinistrous Hand',
  'Skystreak Bow': 'Stegadon w/ Skystreak Bow',
  'Solar Engine': 'Bastiladon w/ Solar Engine',
  'Stormcall Javelins': 'Prosecutors with Stormcall Javelins',
  'Sunfire Throwers': 'Stegadon w/ Sunfire Throwers',
  'Unholy Lodestone': 'Corpse Cart w/ Unholy Lodestone',
}

export const importFactionNameMap = {
  'Beastclaw Raiders': BEASTCLAW_RAIDERS,
  'Beasts of Chaos': BEASTS_OF_CHAOS,
  'Blades of Khorne': KHORNE,
  'Clans Eshin': SKAVEN,
  'Clans Moulder': SKAVEN,
  'Clans Pestilens': SKAVEN,
  'Clans Skryre': SKAVEN,
  'Clans Verminus': SKAVEN,
  'Daughters of Khaine': DAUGHTERS_OF_KHAINE,
  'Disciples of Tzeentch': TZEENTCH,
  'Flesh Eater Courts': FLESH_EATER_COURTS,
  'Flesh-eater Courts': FLESH_EATER_COURTS,
  'Gitmob Grots': GLOOMSPITE_GITZ,
  'Gloomspite Gitz': GLOOMSPITE_GITZ,
  'Grand Host of Nagash': GRAND_HOST_OF_NAGASH,
  'Greyfyrd Lodge': MERCENARY_COMPANIES,
  'Grugg Brothers': MERCENARY_COMPANIES,
  'Hedonites of Slaanesh': SLAANESH,
  'Idoneth Deepkin': IDONETH_DEEPKIN,
  'Kharadron Overlords': KHARADRON_OVERLORDS,
  'Legion of Azgorh': LEGIONS_OF_AZGORH,
  'Legion of Blood': LEGION_OF_BLOOD,
  'Legion of Grief': LEGIONS_OF_GRIEF,
  'Legion of Night': LEGION_OF_NIGHT,
  'Legion of Sacrament': LEGION_OF_SACRAMENT,
  'Lethisian Defenders': LETHISIAN_DEFENDERS,
  'Maggotkin of Nurgle': NURGLE,
  'Mercenaries: Greyfyrd Lodge': MERCENARY_COMPANIES,
  'Mercenaries: Grugg Brothers': MERCENARY_COMPANIES,
  'Mercenaries: Order of the Blood-Drenched Rose': MERCENARY_COMPANIES,
  'Mercenaries: Rampagers': MERCENARY_COMPANIES,
  'Mercenaries: Sons of the Lichemaster': MERCENARY_COMPANIES,
  'Mercenaries: Tenebrous Court': MERCENARY_COMPANIES,
  'Mercenaries: The Blacksmoke Battery': MERCENARY_COMPANIES,
  'Mercenaries: The Gutstuffers': MERCENARY_COMPANIES,
  'Moonclan Grots': GLOOMSPITE_GITZ,
  'Order of the Blood-Drenched Rose': MERCENARY_COMPANIES,
  'Ossiarch Bonereapers': OSSIARCH_BONEREAPERS,
  'Slaves to Darkness': SLAVES_TO_DARKNESS,
  'Sons of the Lichemaster': MERCENARY_COMPANIES,
  'Spiderfang Grots': GLOOMSPITE_GITZ,
  'Stormcast Eternals': STORMCAST_ETERNALS,
  'Tenebrous Court': MERCENARY_COMPANIES,
  'The Blacksmoke Battery': MERCENARY_COMPANIES,
  'The Gutstuffers': MERCENARY_COMPANIES,
  "Mercenaries: Nimyard's Rough-Riders": MERCENARY_COMPANIES,
  "Mercenaries: Skroug's Menagerie": MERCENARY_COMPANIES,
  "Nimyard's Rough-Riders": MERCENARY_COMPANIES,
  "Skroug's Menagerie": MERCENARY_COMPANIES,
  "Tamurkhan's Horde": TAMURKHANS_HORDE,
  Bonesplitterz: BONESPLITTERZ,
  Brayherd: BEASTS_OF_CHAOS,
  Chaos: CHAOS_GRAND_ALLIANCE,
  Death: DEATH_GRAND_ALLIANCE,
  Destruction: DESTRUCTION_GRAND_ALLIANCE,
  Dispossessed: DISPOSSESSED,
  Everchosen: EVERCHOSEN,
  Fyreslayers: FYRESLAYERS,
  Gutbusters: GUTBUSTERS,
  Ironjawz: IRONJAWZ,
  Khorne: KHORNE,
  Lethisian: LETHISIAN_DEFENDERS,
  Nighthaunt: NIGHTHAUNT,
  Nurgle: NURGLE,
  Order: ORDER_GRAND_ALLIANCE,
  Rampagers: MERCENARY_COMPANIES,
  Seraphon: SERAPHON,
  Skaventide: SKAVEN,
  Slaanesh: SLAANESH,
  Soulblight: SOULBLIGHT,
  Sylvaneth: SYLVANETH,
  Thunderscorn: BEASTS_OF_CHAOS,
  Tzeentch: TZEENTCH,
  Wanderers: WANDERERS,
  Warherds: BEASTS_OF_CHAOS,
}

export type TNameMap = { [key: string]: string }

type TParserOptions = {
  [key in TImportParsers]: {
    checkPoorSpacing: boolean
    fileReadError: string
    typoMap: TNameMap
  }
}

export const parserOptions: TParserOptions = {
  'Warscroll Builder': {
    checkPoorSpacing: false,
    fileReadError: `There was a problem reading this file. Please try re-downloading it from Warscroll Builder.`,
    typoMap: warscrollTypoMap,
  },
  Azyr: {
    checkPoorSpacing: true,
    fileReadError: `There was a problem reading this file.`,
    typoMap: azyrTypoMap,
  },
  Battlescribe: {
    checkPoorSpacing: false,
    fileReadError: `There was a problem reading this file.`,
    typoMap: {},
  },
}