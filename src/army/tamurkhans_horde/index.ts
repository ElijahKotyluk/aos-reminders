import { Battalions as NurgleBattalions, Units as NurgleUnits } from 'army/nurgle/units'
import { uniqBy } from 'lodash'
import Abilities from './abilities'
import Artifacts from './artifacts'
import Traits from './traits'
import { Battalions, Units } from './units'

const TamurkhansHordeArmy = {
  Abilities,
  AlliedUnits: [...NurgleUnits],
  Artifacts,
  Battalions: uniqBy([...Battalions, ...NurgleBattalions], 'name'),
  Traits,
  Units,
}

export default TamurkhansHordeArmy
