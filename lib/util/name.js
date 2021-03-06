/**
 *  Utility used to determine the name of a function.
 *
 *  @param func The function.
 *
 *  @return The string name of the function; null if anonymous.
 */
module.exports = function(func) {
  //console.log('func %s', func);
  if (typeof func !== 'function') {
    return null;
  }
  return func.name || null;
};
