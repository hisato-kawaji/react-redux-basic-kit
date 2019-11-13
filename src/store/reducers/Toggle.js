import * as Toggle from '../../constants/Toggle';

const initialState = {
  isOn: false,
}

export default function toggle(state = initialState, action) {

  switch (action.type) {
    case Toggle.TOGGLE_ON:
      return Object.assign({}, state, {
        isOn: true,
      });
    case Toggle.TOGGLE_OFF:
      return Object.assign({}, state, {
        isOn: false,
      });
    default:
      return state;
  }
}

