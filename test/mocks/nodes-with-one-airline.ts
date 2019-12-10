export function nodesWithOneAirline() {
  return [
    [
      { name: 'airline', value: 'gol', airline: 'gol' },
      { name: 'isOta', value: true, airline: 'gol' },
      {
        name: 'hasBaggage',
        value: true,
        airline: 'gol'
      },
      {
        name: 'isInternational',
        value: false,
        airline: 'gol'
      },
      {  
        name: 'ranking',
        value: 3,
        airline: 'gol'
      }
    ],
    [
      { name: 'airline', value: 'gol', airline: 'gol' },
      { name: 'isMiles', value: true, airline: 'gol' },
      {
        name: 'hasBaggage',
        value: true,
        airline: 'gol'
      },
      {
        name: 'isInternational',
        value: true,
        airline: 'gol'
      },
      {  
        name: 'ranking',
        value: 4,
        airline: 'gol'
      }
    ],
    [
      { name: 'airline', value: 'gol', airline: 'gol' },
      { name: 'isOta', value: true, airline: 'gol' },
      {
        name: 'hasBaggage',
        value: false,
        airline: 'gol'
      },
      {
        name: 'isInternational',
        value: true,
        airline: 'gol'
      },
      {  
        name: 'ranking',
        value: -1,
        airline: 'gol'
      }
    ]
  ]
}
