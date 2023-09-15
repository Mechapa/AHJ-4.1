/* eslint-disable linebreak-style */
import cardNumber from '../card';

test('return amex', () => {
  const value = '348507163030369';
  const result = cardNumber(value);
  expect(result).toBe('amex');
});
test('return master', () => {
  const value = '5339791475730870';
  const result = cardNumber(value);
  expect(result).toBe('master');
});
test('return visa', () => {
  const value = '4532263187559797';
  const result = cardNumber(value);
  expect(result).toBe('visa');
});
test('return discover', () => {
  const value = '6011163485918809';
  const result = cardNumber(value);
  expect(result).toBe('discover');
});
test('return jcb', () => {
  const value = '3537569147383467';
  const result = cardNumber(value);
  expect(result).toBe('jcb');
});
test('return diners-club', () => {
  const value = '5507856360790390';
  const result = cardNumber(value);
  expect(result).toBe('diners_club');
});
test('return mir', () => {
  const value = '2202200188622201';
  const result = cardNumber(value);
  expect(result).toBe('mir');
});
