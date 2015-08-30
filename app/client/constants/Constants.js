import keyMirror from 'keymirror';

module.exports = {
  VERSION: '0.4.0',
  ActionTypes: keyMirror({
    UPDATE_GAMEPADS: null,
    UPDATE_MOTOR: null,
    UPDATE_PERIPHERAL: null,
    SEND_CODE: null,
    RECEIVE_CODE: null
  }),
  PeripheralTypes: keyMirror({
    MOTOR_SCALAR: null,
    SENSOR_BOOLEAN: null,
    SENSOR_SCALAR: null
  })
};
