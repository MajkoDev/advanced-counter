export function formatNumber(num) {
    const roundedNum = num.toFixed(3); // Round to 3 decimal places
    const decimalPart = parseFloat(roundedNum.split('.')[1]); // Extract the decimal part
    
    if (decimalPart === 0) {
      // If decimal part is zero, return the number without decimal places
      return parseInt(roundedNum);
    } else if (decimalPart % 10 === 0) {
      // If decimal part is a whole number, return the number with one decimal place
      return parseFloat(roundedNum).toFixed(1);
    } else {
      // Otherwise, return the number with three decimal places
      return parseFloat(roundedNum);
    }
  }