export const util = {
  getRangePortionByCost: cost => {
    let value = cost - 12000;
    if (value < 0) value = 0;
    if (value > 988000) value = 988000;
    const portion = value / 988000;
    return portion > 1 ? 1 : portion;
  },
  getCostPortionByRange: range => {
    const portion = range / 320;
    return portion > 1 ? 1 : portion;
  },
  convertCostToCurrencyFormat: cost => {
    let rev = (cost + "").split("").reverse();
    let result = [];
    for (let i = 0; i < rev.length; ++i) {
      if (i !== 0 && i % 3 === 0) result.push(",");
      result.push(rev[i]);
    }
    return result.reverse().join("");
  }
};

export default util;
