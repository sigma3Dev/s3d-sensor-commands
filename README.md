# s3d-sensor-commands
module with all available sensor commands (json) to communicate with the s3dsensorservice (c++ websocket service)

## Installation

  npm install s3d-sensor-commands --save

## overview

```js
/**
 * json message to connect the sensor
 *
 * @param {number} id
 * @return {string} message
 */
connect: function(id)

/**
 * json message to disconnect the sensor
 *
 * @param {number} id
 * @return {string} message
 */
disconnect: function(id)

/**
 * json message to trigger a measurement
 *
 * @param {number} id
 * @return {string} message
 */
measure: function(id)

/**
 * json message to toggle the sensor
 *
 * @param {number} id
 * @return {string} message
 */
toggle: function(id)

/**
 * json message to do a home action
 *
 * @param {number} id
 * @return {string} message
 */
home: function(id)

/**
 * json message to call the self compIt action of the sensor
 *
 * @param {number} id
 * @return {string} message
 */
compIt: function(id)

/**
 * json message to initialize the sensor
 *
 * @param {number} id
 * @return {string} message
 */
initialize: function(id)

/**
 * json message to choose a faro ion laser tracker as active sensor
 *
 * @param {number} id
 * @param {string} ip
 * @return {string} message
 */
chooseFaroIon: function(id, ip)

/**
 * json message to choose a faro vantage laser tracker as active sensor
 *
 * @param {number} id
 * @param {string} ip
 * @return {string} message
 */
chooseFaroVantage: function(id, ip)

/**
 * json message to choose a leica laser tracker as active sensor
 *
 * @param {number} id
 * @param {string} ip
 * @return {string} message
 */
chooseLeica: function(id, ip)

/**
 * json message to set the single point measurement as active config
 *
 * @param {number} id
 * @param {number} frequency
 * @param {number} iteration
 * @param {boolean} measureTwoSides
 * @return {string} message
 */
setSingleMeasurementConfig: function(id, frequency, iteration, measureTwoSides)

/**
 * json message to set scan by distance as active measurement config
 *
 * @param {number} id
 * @param {number} frequency
 * @param {number} count
 * @param {number} delta
 * @return {string} message
 */
setScanByDistanceConfig: function(id, frequency, count, delta)
```
