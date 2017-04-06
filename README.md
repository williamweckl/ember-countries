# Ember-countries
[![npm version](https://badge.fury.io/js/ember-countries.svg)](https://badge.fury.io/js/ember-countries)
[![Ember Observer Score](http://emberobserver.com/badges/ember-countries.svg)](http://emberobserver.com/addons/ember-countries)

A simple Addon that contains the 6 following lists:
 - all the countries in ISO2 (US), ISO3 (USA), ISO-Numeric (840) and English name (United States) formats.
 - the countries without ZIP Code.
 - the countries with states.
 - the US states & military states
 - the US states that require customs declaration
 - the Canadian states

Here are a list of the main helpers:
 - Country ISO2, ISO3 or ISO-Numeric to Country object.
 - Is country with state.
 - Is country without ZIP Code.
 - State ISO2 to State object

You can find more information about ISO codes here:
 - [ISO 3166-1 standard](https://en.wikipedia.org/wiki/ISO_3166-1)
 - [ISO 3166-2 standard](https://en.wikipedia.org/wiki/ISO_3166-2)

## Installation

* `ember install ember-countries`


## Upgrading from 1.x.x to 2.0.0

Here are all the information that you need to migrate from version 1.x.x to 2.0.0: [Migrating from 1.x.x to 2.0.0](https://github.com/mnowik/ember-countries/wiki/Migrating-from-1.x.x-to-2.0.0)

## Usage

### All imports
```js
import { COUNTRIES_LIST, COUNTRIES_WITHOUT_ZIP_LIST, COUNTRIES_WITH_STATES_LIST } from 'ember-countries';
import { US_STATES_LIST, US_MILITARY_STATES_LIST, US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST, CA_STATES_LIST, STATES_BY_COUNTRIES } from 'ember-countries';
import { getCountry, isCountryWithState, isCountryWithoutZip } from 'ember-countries';
import { getStatesForCountry, isCustomsDeclarationRequiredInUS, countryContainsState, getState } from 'ember-countries';
import defaultEmberCountries from 'ember-countries';
```

### Example 1: countries lists
```js
import Em from 'ember';
import { COUNTRIES_LIST } from 'ember-countries';

export default Em.Controller.extend({

  COUNTRIES_LIST: COUNTRIES_LIST,
  ...
});
```

### Example 2: countries properties
```js
import Em from 'ember';
import { getCountry, isCountryWithState, isCountryWithoutZip } from 'ember-countries';

export default Em.Controller.extend({

  countryHelper() {
    let expect   = {name: "United States", iso2: "US", iso3: "USA", isoNumeric: "840"}
    let country1 = getCountry('US');
    let country2 = getCountry('USA');
    let country3 = getCountry('840');
    
    country1 === expect  // true
    country2 === expect  // true
    country3 === expect  // true
    
    isCountryWithState('US')  // true
    isCountryWithoutZip('US')  // false
  },
  ...
});
```

### Example 3: states lists
```js
import Em from 'ember';
import emberCountries from 'ember-countries';

export default Em.Controller.extend({

  US_STATES: emberCountries.US_STATES_LIST,
  ...
});
```

### Example 4: states properties
```js
import Em from 'ember';
import { getState, countryContainsState } from 'ember-countries';

export default Em.Controller.extend({

  countryHelper() {
    let expect = {name: "California", iso2: "CA"}
    let state1 = getState('US', 'CA');
    let state2 = getState('USA', 'CA');
    let state3 = getState('840', 'CA');
    
    state1 === expect  // true
    state2 === expect  // true
    state3 === expect  // true
    
    countryContainsState('US', 'CA')  // true
  },
  ...
});
```
## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`


## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Contributing

PRs welcome!
