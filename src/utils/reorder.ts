import { sortBy, isEqual } from 'lodash'
import { LocalReminderOrder } from 'utils/localStore'
import { IReminder } from 'types/data'
import { TTurnWhen } from 'types/phases'

interface WithId {
  id: string
}

export const reorderViaIndex = <T extends WithId>(list: T[], ids: string[]) => {
  return ids.reduce((a, id) => {
    const entry = list.find(l => l.id && l.id === id)
    if (entry) a.push(entry)
    return a
  }, [] as T[])
}

// Used for drag and drop by react-beautful-dnd
export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const reorderReminders = (reminders: IReminder): IReminder => {
  return Object.keys(reminders).reduce((accum, when) => {
    const actions = reminders[when]
    const currentIds = sortBy(actions.map(x => x.id))
    const storedIds = LocalReminderOrder.getWhen(when as TTurnWhen) || []

    if (storedIds.length > 0 && isEqual(currentIds, sortBy(storedIds))) {
      const reordered = reorderViaIndex(actions, storedIds)
      accum[when] = reordered
    } else {
      accum[when] = actions
    }

    return accum
  }, {} as IReminder)
}