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
  }
};

export default util;
