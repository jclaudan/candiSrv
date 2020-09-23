import { getFrenchLuxon } from '../../../util'

/**
 * Obtenir la date pour récupérer les places créés avant cette date et quand les récupérer
 * exemple: les places créés avant le jour J à 12h seront affiché à 12h
 * exemple: les places créés aprés le jour J à 12h seront affiché lendemain à 12h
 * @function
 */
export const getDateDisplayPlaces = (hour = 12) => {
  const newDate = getFrenchLuxon().minus({ hours: 12 })
  return newDate.set({ hour, minute: 0, second: 0 })
}
