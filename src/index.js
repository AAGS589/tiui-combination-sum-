/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 * @return {void}
 */

const combinationSumRecursive = (
  candidates,
  remainingSum,
  finalCombinations,
  currentCombination,
  startFrom
) => {
  // Si la suma restante es 0, añadimos una copia de la combinación actual a las combinaciones finales
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return;
  }

  // Iteramos sobre los candidatos comenzando desde startFrom
  for (let i = startFrom; i < candidates.length; i++) {
    if (candidates[i] <= remainingSum) {
      currentCombination.push(candidates[i]);
      combinationSumRecursive(
        candidates,
        remainingSum - candidates[i],
        finalCombinations,
        currentCombination,
        i
      );
      currentCombination.pop();
    }
  }
};
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    const finalCombinations = []
    combinationSumRecursive(candidates, target, finalCombinations, [], 0);
    return finalCombinations;
  };

module.exports = combinationSum;