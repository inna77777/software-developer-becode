const spaceAge = (seconds, planet) => {
  const earthYearInSeconds = 31557600;
  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
  };

  planet = planet.toLowerCase();

  return orbitalPeriods[planet]
    ? (seconds / earthYearInSeconds / orbitalPeriods[planet]).toFixed(2)
    : "Invalid planet";
};

console.log(spaceAge(31557600, 'Earth')); // Should output 1.00
console.log(spaceAge(1000000000, 'Earth')); // Should output 31.69
console.log(spaceAge(1000000000, 'Mercury')); // Should output 131.57
console.log(spaceAge(1000000000, 'Venus')); // Should output 51.51
console.log(spaceAge(1000000000, 'Mars')); // Should output 16.85
console.log(spaceAge(1000000000, 'Jupiter')); // Should output 2.67
console.log(spaceAge(1000000000, 'Pluto')); // Should output "Invalid planet"
