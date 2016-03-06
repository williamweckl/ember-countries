# Ember-countries

A simple addon that contains the 3 following lists:
 - all the countries in ISO and name format (ie: US - United States).
 - the countries without ZIP Code.
 - the countries with states.

Three helpers are also available:
 - Country ISO to name.
 - Is country with state.
 - Is country without ZIP Code.


## Installation

* `ember install ember-countries`


## Usage

```js
// lists of countries
import {countries, countriesWithoutZip, countriesWithState} from 'ember-countries';
import {countryIsoToValue, isCountryWithState, isCountryWithoutZip} from 'ember-countries';

// How to use lists
export default Ember.Controller.extend({
  ...
  countriesList: countries,
  ...
});

// Example that is using countryIsoToValue
countryIsoToValue('FR'); // -> 'France'
```


## Running Tests

* `ember test`
* `ember test --server`


## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

##Contributing

PRs welcome!
