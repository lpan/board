import {database} from './config';

const sigsRef = database.ref('signatures');

// cords - {x: float, y: float}
export const addSig = (firstname, lastname, cords, opts = {}) => {
  sigsRef.push({
    ...opts,
    firstname,
    lastname,
    cords,
  });
};

export const sigListener = (onValueChange) => {
  sigsRef.on('value', onValueChange);
};
