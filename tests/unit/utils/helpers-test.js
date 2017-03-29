import { getFormat } from 'ember-countries/utils/helpers';
import { module, test } from 'qunit';

module('Unit | Utility | getFormat');

test('getFormat with isoNumeric', function(assert) {
  let result = getFormat('123');
  assert.equal(result, 'isoNumeric');
});

test('getFormat with iso2', function(assert) {
  let result = getFormat('US');
  assert.equal(result, 'iso2');
});

test('getFormat with iso3', function(assert) {
  let result = getFormat('UMI');
  assert.equal(result, 'iso3');
});

test('getFormat with wrong value `Number`', function(assert) {
  let result = getFormat(1);
  assert.equal(result, null);
});

test('getFormat with wrong value `null`', function(assert) {
  let result = getFormat(null);
  assert.equal(result, null);
});

test('getFormat with wrong value `undefined`', function(assert) {
  let result = getFormat(undefined);
  assert.equal(result, null);
});
