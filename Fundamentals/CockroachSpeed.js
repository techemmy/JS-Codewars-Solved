function cockroachSpeed(s) {
  // conversion rate is 1 km/hr ---> 27.7778
  // Multiply s (the speed in km/hr) with 27.7778 to get the speed in cm/s
  // then use Math.floor to make sure it's a whole number as required
  return Math.floor(s * 27.7778);
}
