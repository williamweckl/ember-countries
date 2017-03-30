import Em from 'ember';
import { COUNTRIES_LIST, COUNTRIES_WITHOUT_ZIP_LIST, COUNTRIES_WITH_STATES_LIST } from './countries-lists';
import { getFormat } from './helpers';

const {
  isNone
  } = Em;

let indexedByIso2;
let indexedByIso3;
let indexedByIsoNumeric;


export function getCountry(value) {
  let valueFormat = getFormat(value);
  if (valueFormat === null) {return;}

  let listIndexed = _getCountriesListIndexed(valueFormat);
  let selectedCountry = listIndexed[value.toUpperCase()];

  if (!isNone(selectedCountry)) {
    return selectedCountry;
  }
}


export function isCountryWithoutZip(value) {
  let country = getCountry(value);
  if (isNone(country)) {return false;}

  // return true if the country has not a required ZIP code
  return COUNTRIES_WITHOUT_ZIP_LIST.indexOf(country.iso2) > -1;
}


export function isCountryWithState(value) {
  let country = getCountry(value);
  if (isNone(country)) {return false;}

  // return true if the country has a required State.
  return COUNTRIES_WITH_STATES_LIST.indexOf(country.iso2) > -1;
}

function _getCountriesListIndexed(code) {
  let index = {};
  if (code === 'iso2') {
    index = _buildIndex(code, indexedByIso2);
    indexedByIso2 = index;
  } else if (code === 'iso3') {
    index = _buildIndex(code, indexedByIso3);
    indexedByIso3 = index;
  } else if (code === 'isoNumeric') {
    index = _buildIndex(code, indexedByIsoNumeric);
    indexedByIsoNumeric = index;
  }
  return index;
}

function _buildIndex(code, indexedObj) {
  if (!isNone(indexedObj)) { return indexedObj; }
  indexedObj = COUNTRIES_LIST.reduce((prev, el) => {
    prev[el[code]] = el;
    return prev;
  }, {});
  return indexedObj;
}
