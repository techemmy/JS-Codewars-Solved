function enough(cap, on, wait) {
  // This teaches you how to use the ternary operator
  // Read on it first: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  // cap - on returns the space left on the bus
  // the number is positive if there's space on the bus, otherwise negative
  // if cap - on is greater or equals to wait that those waiting that means we have that enough space to accomodate the people waiting
  // if cap - on >= wait is true then we return 0
  // else, we return wait - (cap - on)
  // cap - on as explained on line 5, returns space left.
  // then wait - (cap - on) calculates the people that'd be left if we fill the space left in the buss
  return cap - on >= wait ? 0 : wait - (cap - on);
  // OR

  // wait + on returns the total amount of people on and off the bus
  // wait + on - cap returns the amount of people that'll be left if you subtract the bus capacity
  // hence, you'll get the amount of people that cannot enter.
  // if wait+on-cap is a positive, it means the total number is more that the bus capacity.
  // Therefore, Math.floor will return that
  // Otherwise, i.e wait+on-cap is a negative value indicating there is still space in the bus.
  //   return Math.max(wait + on - cap, 0);
}
