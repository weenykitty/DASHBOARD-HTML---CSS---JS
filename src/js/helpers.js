export function amountFollowers(array) {
  return array.reduce((acum, obj) => {
    acum += obj.number;
    return acum;
  }, 0);
}