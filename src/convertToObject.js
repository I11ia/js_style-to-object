'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((acc, line) => {
      const [property, value] = line.split(':');

      if (property && value !== undefined) {
        acc[property.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
