import * as Toggle from '../constants/Toggle';

export function toggleOn() {
  return {
    type: Toggle.TOGGLE_ON,
  }
}

export function toggleOff() {
  return {
    type: Toggle.TOGGLE_OFF,
  }
}
