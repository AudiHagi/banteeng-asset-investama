export default function formatterMoney(
  amount,
  decimalCount = 2,
  thousands = ","
) {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    amount = Math.abs(Number(amount) || 0);
    const i = parseInt(amount.toFixed(decimalCount)).toString();
    const j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands)
    );
  } catch (e) {
    throw e;
  }
}
