
module.exports = {

  /**
   * json message to connect the sensor
   *
   * @param {number} id
   * @return {string} message
   */
  connect: function(id) {
    //build up connect request object
    let message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id: id,
        method: 'connectSensor',
        params: {},
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to disconnect the sensor
   *
   * @param {number} id
   * @return {string} message
   */
  disconnect: function(id) {
    //build up disconnect request object
    let message = JSON.stringify({
        jsonrpc: '2.0',
        id: id,
        method: 'disconnectSensor',
        params: {},
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to trigger a measurement
   *
   * @param {number} id
   * @return {string} message
   */
  measure: function(id) {
    let message = JSON.stringify({
        jsonrpc: '2.0',
        id: id,
        method: 'measure',
        params: {},
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to toggle the sensor
   *
   * @param {number} id
   * @return {string} message
   */
  toggle: function(id) {
    let message = JSON.stringify({
        jsonrpc: '2.0',
        id: id,
        method: 'doSensorAction',
        params: { name: 'toggleSightOrientation', params: [] },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to do a home action
   *
   * @param {number} id
   * @return {string} message
   */
  home: function(id) {
    let message = JSON.stringify({
        jsonrpc: '2.0',
        id: id,
        method: 'doSensorAction',
        params: { name: 'home', params: [] },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to call the self compIt action of the sensor
   *
   * @param {number} id
   * @return {string} message
   */
  compIt: function(id) {
    let message = JSON.stringify({
        jsonrpc: '2.0',
        id: id,
        method: 'doSensorAction',
        params: { name: 'compIt', params: [] },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to initialize the sensor
   *
   * @param {number} id
   * @return {string} message
   */
  initialize: function(id) {
    let message = JSON.stringify({
        jsonrpc: '2.0',
        id: id,
        method: 'doSensorAction',
        params: { name: 'initialize', params: [] },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to choose a faro ion laser tracker as active sensor
   *
   * @param {number} id
   * @param {string} ip
   * @return {string} message
   */
  chooseFaroIon: function(id, ip) {
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id: id,
        method: 'getSensor',
        params: {
          name: 'FaroLaserTracker',
          parameter: {
            sensorParameter: [
              {
                name: 'connection',
                properties: {
                  trackerType: 'ion',
                  ip: ip,
                },
                trackerTypes: ['ion', 'vantage'],
              },
              {
                name: 'probe',
                properties: {
                  activeProbe: '1.5',
                  probes: ['0.5', '7/8', '1.5'],
                },
              },
              {
                name: 'distanceMode',
                properties: {
                  activeDistanceMode: 'ADMOnly',
                  distanceModes: [
                    'ADMOnly',
                    'InterferometerOnly',
                    'InterferometerSetByADM',
                  ],
                },
              },
            ],
          },
        },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to choose a faro vantage laser tracker as active sensor
   *
   * @param {number} id
   * @param {string} ip
   * @return {string} message
   */
  chooseFaroVantage: function(id, ip) {
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id: id,
        method: 'getSensor',
        params: {
          name: 'FaroLaserTracker',
          parameter: {
            sensorParameter: [
              {
                name: 'connection',
                properties: {
                  trackerType: 'vantage',
                  ip: ip,
                },
                trackerTypes: ['ion', 'vantage'],
              },
              {
                name: 'probe',
                properties: {
                  activeProbe: '1.5',
                  probes: ['0.5', '7/8', '1.5'],
                },
              },
              {
                name: 'distanceMode',
                properties: {
                  activeDistanceMode: 'ADMOnly',
                  distanceModes: [
                    'ADMOnly',
                    'InterferometerOnly',
                    'InterferometerSetByADM',
                  ],
                },
              },
            ],
          },
        },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to choose a leica laser tracker as active sensor
   *
   * @param {number} id
   * @param {string} ip
   * @return {string} message
   */
  chooseLeica: function(id, ip) {
    const message = JSON.stringify({
        jsonrpc: '2.0',
        id: id,
        method: 'getSensor',
        params: {
          name: 'LeicaLaserTracker',
          parameter: {
            sensorParameter: [
              {
                name: 'connection',
                properties: {
                  ip: ip,
                  port: 700,
                },
              },
              {
                name: 'probe',
                properties: {
                  activeProbe: 'RRR15',
                  probes: ['RRR15', 'RRR05', 'RRR0875', 'glass prism'],
                },
              },
              {
                name: 'measureMode',
                properties: {
                  activeMeasureMode: 'fast',
                  MeasureModes: ['fast', 'standard', 'precise', 'stationary'],
                },
              },
            ],
          },
        },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to set the single point measurement as active config
   *
   * @param {number} id
   * @param {number} frequency
   * @param {number} iteration
   * @param {boolean} measureTwoSides
   * @return {string} message
   */
  setSingleMeasurementConfig: function(id, frequency, iteration, measureTwoSides) {
    const message = JSON.stringify({
        jsonrpc: '2.0',
        method: 'setMeasurementConfig',
        id: id,
        params: {
          // polar or cartesian
          readingType: 'cartesian',
          measureType: 'singlePoint',
          measurementConfig: [
            {
              name: 'singlePoint',
              properties: {
                frequency: frequency,
                iteration: iteration,
                measureTwoSides: measureTwoSides,
              },
            },
            {
              name: 'scan',
              properties: {
                scanMethod: 'distance',
                frequency: 1,
                count: 1000,
                delta: 0.001,
                scanMethods: ['distance', 'time'],
              },
            },
          ],
        },
      },
      undefined,
      4,
    );
    return message;
  }

  /**
   * json message to set scan by distance as active measurement config
   *
   * @param {number} id
   * @param {number} frequency
   * @param {number} count
   * @param {number} delta
   * @return {string} message
   */
  setScanByDistanceConfig: function(id, frequency, count, delta) {
    const message = JSON.stringify({
        jsonrpc: '2.0',
        method: 'setMeasurementConfig',
        id: id,
        params: {
          // polar or cartesian
          readingType: 'cartesian',
          measureType: 'scan',
          measurementConfig: [
            {
              name: 'singlePoint',
              properties: {
                frequency: 1000,
                iteration: 1,
                measureTwoSides: false,
              },
            },
            {
              name: 'scan',
              properties: {
                scanMethod: 'distance',
                frequency: frequency,
                count: count,
                delta: delta,
                scanMethods: ['distance', 'time'],
              },
            },
          ],
        },
      },
      undefined,
      4,
    );
    return message;
  }

};
