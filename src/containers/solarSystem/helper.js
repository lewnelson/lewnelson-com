import { YEAR } from './constants'

export function getOrbitalRotation (years, deltaTime) {
  return (Math.PI * 2 / 100) * (deltaTime / (YEAR * years)) * 100
}
