export const makeId = (length) => {
  const randomStr = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let randomAdd = '';

  for (let i = 0; i < length; i += 1) {
    randomAdd += randomStr[Math.floor(Math.random() * randomStr.length)];
  }

  return randomAdd;
};
