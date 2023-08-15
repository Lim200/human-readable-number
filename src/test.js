function toReadable (number) {
    let numberInt = number;
    let resultHundred = '';
    let resultTens = '';
    let result = '';
    let resultUnits = '';
     if (numberInt > 99) {
        let firstNumber = (numberInt - (numberInt % 100)) / 100;
        switch (firstNumber) {
            case 0:
              return 'Zero';
              break;
            case 1:
                resultHundred = 'one hundred';
              break;
            case 2:
                resultHundred = 'two hundred';
              break;
            case 3:
                resultHundred = 'three hundred';
              break;
              case 4:
                resultHundred = 'four hundred';
              break;
            case 5:
                resultHundred = 'five hundred';
              break;
              case 6:
                resultHundred = 'six hundred';
              break;
            case 7:
                resultHundred = 'seven hundred';
              break;
              case 8:
                resultHundred = 'eight hundred';
              break;
            case 9:
                resultHundred = 'nine hundred';
              break;
              }
              numberInt = numberInt-(firstNumber*100);
              //console.log(numberInt);
     }
     if (numberInt >= 20 && numberInt <= 99) {
        let secondNumber = (numberInt - (numberInt % 10)) / 10;
        //console.log(secondNumber);
        switch (secondNumber) {
            // case 0:
            //     resultTens = '';
            //   break;
            // case 1:
            //     resultTens = 'one hundred';
            //   break;
            case 2:
                resultTens = ' twenty';
              break;
            case 3:
                resultTens = ' thirty';
              break;
              case 4:
                resultTens = ' forty';
              break;
            case 5:
                resultTens = ' fifty';
              break;
              case 6:
                resultTens =' sixty';
              break;
            case 7:
                resultTens = ' seventy';
              break;
              case 8:
                resultTens = ' eighty';
              break;
            case 9:
                resultTens = ' ninety';
              break;
              }
              numberInt = numberInt-(secondNumber*10);
             // console.log(numberInt);
     }
     if (numberInt >= 0 && numberInt <= 19) {
                let secondMoreTenLessTwenty = numberInt;
                console.log(secondMoreTenLessTwenty);
                switch (secondMoreTenLessTwenty) {
                    case 10:
                        resultUnits = 'ten';
                      break;
                    case 11:
                        resultUnits = 'eleven';
                      break;
                    case 12:
                        resultUnits = 'twelve';
                      break;
                    case 13:
                        resultUnits = 'thirteen';
                      break;
                      case 14:
                        resultUnits = 'fourteen';
                      break;
                    case 15:
                        resultUnits = 'fifteen';
                      break;
                      case 16:
                        resultUnits ='sixteen';
                      break;
                    case 17:
                        resultUnits = 'seventeen';
                      break;
                      case 18:
                        resultUnits = 'eighteen';
                      break;
                    case 19:
                        resultUnits = 'nineteen';
                      break;
                case 1:
                    resultUnits = ' one';
                break;
                case 2:
                    resultUnits = ' two';
                break;
                case 3:
                    resultUnits = ' three';
                break;
                case 4:
                    resultUnits = ' four';
                break;
                case 5:
                    resultUnits = ' five';
                break;
                case 6:
                    resultUnits =' six';
                break;
                case 7:
                    resultUnits = ' seven';
                break;
                case 8:
                    resultUnits = ' eight';
                break;
                case 9:
                    resultUnits = ' nine';
                break;
                }
    }

     //console.log(resultTens);
     //console.log(numberInt);
     result = `${resultHundred}${resultTens}${resultUnits}`
     return result.trim();
  };

  console.log(toReadable(105));
