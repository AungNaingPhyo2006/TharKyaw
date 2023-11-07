// MyanmarNumberConverter.js

export const mmConvert2en = (number) => {
    const myanmarNumbers = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];
    return String(number).split('').map((digit) => myanmarNumbers[parseInt(digit)]).join('');
  };
  