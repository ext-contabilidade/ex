'use strict';

function um(num) {
    var numeros = [
        'zero',
        'um',
        'dois',
        'três',
        'quatro',
        'cinco',
        'seis',
        'sete',
        'oito',
        'nove'
    ];

    return numeros[num];
}

function dez(num) {
    if (num < 10) {
        return um(num);
    }

    var numeros = [
        'dez',
        'onze',
        'doze',
        'treze',
        'quatorze',
        'quinze',
        'dezeseis',
        'dezesete',
        'dezoito',
        'dezenove',
        'vinte',
        'trinta',
        'quarenta',
        'cinquenta',
        'sessenta',
        'setenta',
        'oitenta',
        'noventa'
    ];

    if (num < 20) {
        return numeros[num - 10];
    } else {
        var n1 = numeros[(num - num % 10) / 10 + 8],
            n2 = num % 10;

        if (num % 10 === 0) {
            return n1;
        } else {
            return n1 + ' e ' + um(n2);
        }
    }
}

function cem(num) {
    if (num < 100) {
        return dez(num);
    } else if (num === 100) {
        return 'cem';
    } else {
        var numeros = [
            'cento',
            'duzentos',
            'trezentos',
            'quatrocentos',
            'quinhentos',
            'seissentos',
            'setecentos',
            'oitocentos',
            'novecentos'
        ];

        var n1 = numeros[(num - num % 100) / 100 - 1],
            n2 = num % 100;

        if (num % 100 === 0) {
            return n1;
        } else {
            return n1 + ' e ' + dez(n2);
        }
    }
}

function f(numero, sigular, plural, fun) {
    return function (num) {
        if (num === 1e3) {
            return 'mil';
        }

        var n = (num - num % numero) / numero, n2;

        if (num < numero) {
            return fun(num);
        } else if (n === 1) {
            if (num === numero) {
                return 'um ' + sigular;
            }

            n2 = num % numero;

            if (n2 % 100 === 0 || n2 < 100) {
                return 'um ' + sigular + ' e ' + fun(n2);
            } else {
                return 'um ' + sigular + ' ' + fun(n2);
            }
        } else {
            if (num % numero === 0) {
                return fun(n) + ' ' + plural;
            } else {
                var n1 = n;
                n2 = num % numero;

                if (n2 % 100 === 0 || n2 < 100) {
                    return fun(n1) + ' ' + plural + ' e ' + fun(n2);
                } else {
                    return fun(n1) + ' ' + plural + ' ' + fun(n2);
                }
            }
        }
    };
}

var mil = f(1e+3, 'mil', 'mil', cem),
    milhao = f(1e+6, 'milhão', 'milhões', mil),
    bilhao = f(1e+9, 'bilhão', 'bilhões', milhao),
    trilhao = f(1e+12, 'trilhão', 'trilhões', bilhao),
    quadrilhao = f(1e+15, 'quadrilhão', 'quadrilhões', trilhao),
    quintilhao = f(1e+18, 'quintilhão', 'quintilhões', quadrilhao),
    sextilhao = f(1e+21, 'sextilhão', 'sextilhões', quintilhao);

module.exports = function (num) {
    if (typeof num === 'number' && !(num % 1) && num >= 0 && num < 1e+24) {
        return sextilhao(num);
    } else if (num) {
        return new Error('Número inválido.');
    } else {
        return undefined;
    }
};