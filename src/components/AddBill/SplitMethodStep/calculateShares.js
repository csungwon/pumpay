import Dinero from 'dinero.js';

/**
 * divide total amount by the user inputs according to split method
 *
 * @param {Dinero} totalAmount
 * @param {'amount' | 'percent' | 'ratio'} method
 * @param {[Dinero]} userInputs
 *
 * @returns {[Dinero]}
 */
export default function calculateShares(totalAmount, method, userInputs) {
  if (method === 'amount') return userInputs;

  const zeroFiltered = userInputs.filter(dinero => !dinero.isZero());

  if (zeroFiltered.length === userInputs.lenght) {
    return totalAmount.allocate(userInputs.map(dinero => dinero.getAmount()));
  }

  if (method === 'percent') {
    zeroFiltered.push(
      Dinero({ amount: 10000 }).subtract(
        zeroFiltered.reduce((total, current) => total.add(current))
      )
    );
  }

  const allocatedShares = totalAmount.allocate(zeroFiltered.map(dinero => dinero.getAmount()));
  return userInputs.map(dinero => (dinero.isZero() ? Dinero({ amount: 0 }) : allocatedShares.shift()));
}
