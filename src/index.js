module.exports = function check(str, bracketsConfig) {
    var steak = [],
        round = 0,
        square = 0,
        figure = 0,
        ver = 0,
        count = 0;
    countRoundOpen = 0,
        countSquareOpen = 0,
        countFigureOpen = 0,
        countVerOpen = 0,
        countSevOpen = 0;
    if (str.length % 2 != 0)
        return false;
    var steak = [];
    for (i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '(':
                countRoundOpen++;
                steak.push(str[i]);
                break;
            case '[':
                countSquareOpen++;
                steak.push(str[i]);
                break;
            case '{':
                countFigureOpen++;
                steak.push(str[i]);
                break;
            case '|':
                if (countVerOpen == 0) {
                    countVerOpen++;
                    steak.push(str[i]);
                    break;
                }
                if (countVerOpen > 0 && steak.pop() == '|') {
                    ver = 0;
                    countVerOpen--;
                }
                break;
            case ')':
                if (steak.pop() == '(') {
                    round = 0;
                    countRoundOpen--;
                } else return false;
                break;
            case ']':
                if (steak.pop() == '[') {
                    countSquareOpen--;
                }
                break;
            case '}':
                if (steak.pop() == '{') {
                    figure = 0;
                    countFigureOpen--;
                }
                break;

            case '1':
                countRoundOpen++;
                steak.push(str[i]);
                break;
            case '3':
                countSquareOpen++;
                steak.push(str[i]);
                break;
            case '5':
                countFigureOpen++;
                steak.push(str[i]);
                break;
            case '7':
                if (countSevOpen == 0) {
                    countSevOpen++;
                    steak.push(str[i]);
                    break;
                }
                if (countSevOpen > 0 && steak.pop() == '7') {
                    ver = 0;
                    countSevOpen--;
                }
                break;
            case '8':
                if (countVerOpen == 0) {
                    countVerOpen++;
                    steak.push(str[i]);
                    break;
                }
                if (countVerOpen > 0 && steak.pop() == '8') {
                    ver = 0;
                    countVerOpen--;
                }
                break;
            case '2':
                if (steak.pop() == '1') {
                    round = 0;
                    countRoundOpen--;
                } else return false;
                break;
            case '4':
                if (steak.pop() == '3') {
                    countSquareOpen--;
                }
                break;
            case '6':
                if (steak.pop() == '5') {
                    figure = 0;
                    countFigureOpen--;
                }
                break;
            default:
                count++;
                break;
        }
    }
    if (countFigureOpen == 0 && countRoundOpen == 0 && countSquareOpen == 0 && countVerOpen == 0 &&
        countSevOpen == 0)
        return true;
    else return false;
}