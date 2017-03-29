
export function getFormat(val) {
  if (typeof val !== "string") {return null;}

  if (!isNaN(Number(val))) {
    return 'isoNumeric';
  } else if (val.length === 2) {
    return 'iso2';
  } else if (val.length === 3) {
    return 'iso3';
  } else {
    return null;
  }
}
