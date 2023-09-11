import test from 'ava'
import gt1000 from './'

test('Deve escrever números maiores que mil', (t) => {
  t.is(gt1000('1001', 'br'), 'mil e um')
  t.is(gt1000('1100', 'br'), 'mil e cem')
  t.is(gt1000('1101', 'br'), 'mil cento e um')
  t.is(gt1000('1114', 'pt'), 'mil cento e catorze')
  t.is(gt1000('1119', 'pt'), 'mil cento e dezanove')
  t.is(gt1000('2000', 'br'), 'dois mil')
  t.is(gt1000('2001', 'br'), 'dois mil e um')
  t.is(gt1000('2100', 'br'), 'dois mil e cem')
  t.is(gt1000('2101', 'br'), 'dois mil cento e um')

  t.is(gt1000('1000000', 'br'), 'um milhão')
  t.is(gt1000('1000001', 'br'), 'um milhão e um')
  t.is(gt1000('1000100', 'br'), 'um milhão e cem')
  t.is(gt1000('1000101', 'br'), 'um milhão cento e um')
  t.is(gt1000('1001001', 'br'), 'um milhão, mil e um')
  t.is(gt1000('1001100', 'br'), 'um milhão, mil e cem')
  t.is(gt1000('1001101', 'br'), 'um milhão, mil cento e um')
  t.is(gt1000('2000000', 'br'), 'dois milhões')
  t.is(gt1000('2000001', 'br'), 'dois milhões e um')
  t.is(gt1000('2000100', 'br'), 'dois milhões e cem')
  t.is(gt1000('2000101', 'br'), 'dois milhões cento e um')
  t.is(gt1000('2001001', 'br'), 'dois milhões, mil e um')
  t.is(gt1000('2001100', 'br'), 'dois milhões, mil e cem')
  t.is(gt1000('2001101', 'br'), 'dois milhões, mil cento e um')
  t.is(gt1000('2000001101', 'pt'), 'dois biliões, mil cento e um')

  t.is(gt1000('2000001101', 'br', 'short'), 'dois bilhões, mil cento e um')
  t.is(gt1000('2000001101', 'br', 'long'), 'dois mil milhões, mil cento e um')

  t.is(gt1000('2000000001101', 'pt', 'short'), 'dois triliões, mil cento e um')
  t.is(gt1000('2000000001101', 'pt', 'long'), 'dois biliões, mil cento e um')
})
