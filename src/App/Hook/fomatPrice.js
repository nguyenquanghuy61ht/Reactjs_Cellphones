export const Format = (product) => {
  var price = product;
  const format = price.split(".");
  var str = "";
  for (let i = 0; i < format.length; i++) {
    str += format[i];
  }
  return str;
};
