function encode() {
    var input = document.getElementById('inputBox').value;
    var map = {
        'A' : 'X',
        'B' : 'Y',
        'C' : 'Z',
        'D' : 'A',
        'E' : 'B',
        'F' : 'C',
        'G' : 'D',
        'H' : 'E',
        'I' : 'F',
        'J' : 'G',
        'K' : 'H',
        'L' : 'I',
        'M' : 'J',
        'N' : 'K',
        'O' : 'L',
        'P' : 'M',
        'Q' : 'N',
        'R' : 'O',
        'S' : 'P',
        'T' : 'Q',
        'U' : 'R',
        'V' : 'S',
        'W' : 'T',
        'X' : 'U',
        'Y' : 'V',
        'Z' : 'W',
        'a' : 'x',
        'b' : 'y',
        'c' : 'z',
        'd' : 'a',
        'e' : 'b',
        'f' : 'c',
        'g' : 'd',
        'h' : 'e',
        'i' : 'f',
        'j' : 'g',
        'k' : 'h',
        'l' : 'i',
        'm' : 'j',
        'n' : 'k',
        'o' : 'l',
        'p' : 'm',
        'q' : 'n',
        'r' : 'o',
        's' : 'p',
        't' : 'q',
        'u' : 'r',
        'v' : 's',
        'w' : 't',
        'x' : 'u',
        'y' : 'v',
        'z' : 'w'
    };

    var output = input.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/g, function (encode) {return map[encode]; });
	document.getElementById('outputBox').value = output;

}

function decode() {
    var input = document.getElementById('inputBox').value;
    var map = {
        'A' : 'D',
        'B' : 'E',
        'C' : 'F',
        'D' : 'G',
        'E' : 'H',
        'F' : 'I',
        'G' : 'J',
        'H' : 'K',
        'I' : 'L',
        'J' : 'M',
        'K' : 'N',
        'L' : 'O',
        'M' : 'P',
        'N' : 'Q',
        'O' : 'R',
        'P' : 'S',
        'Q' : 'T',
        'R' : 'U',
        'S' : 'V',
        'T' : 'W',
        'U' : 'X',
        'V' : 'Y',
        'W' : 'Z',
        'X' : 'A',
        'Y' : 'B',
        'Z' : 'C',
        'a' : 'd',
        'b' : 'e',
        'c' : 'f',
        'd' : 'g',
        'e' : 'h',
        'f' : 'i',
        'g' : 'j',
        'h' : 'k',
        'i' : 'l',
        'j' : 'm',
        'k' : 'n',
        'l' : 'o',
        'm' : 'p',
        'n' : 'q',
        'o' : 'r',
        'p' : 's',
        'q' : 't',
        'r' : 'u',
        's' : 'v',
        't' : 'w',
        'u' : 'x',
        'v' : 'y',
        'w' : 'z',
        'x' : 'a',
        'y' : 'b',
        'z' : 'c'
    };
var output = input.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/g, function (decode) {return map[decode]; });
	document.getElementById('outputBox').value = output;
}