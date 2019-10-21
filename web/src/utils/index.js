export const util = {
  getRangePortionByCost: cost => {
    let value = cost - 12000;
    if (value < 0) value = 0;
    if (value > 988000) value = 988000;
    return value / 988000;
  },
  getCostPortionByRange: range => {
    return range / 320;
  }
};

export default util;
