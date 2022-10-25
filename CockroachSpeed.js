function cockroachSpeed(s) {
  // conversion rate is 1 km/hr ---> 27.7778
  // then use Math.floor to make sure it's a whole number
  return Math.floor(s * 27.7778);
}
