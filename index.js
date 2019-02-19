const fail = (err) => { throw new Error(err); };

module.exports = (...args) => {
  const handler = {
    get: (target, name) => (target[name] ? name : fail(`${name} is not defined in enum`)),
    set: () => { throw new Error('An enum cannot be edited'); },
  };
  const target = {};

  for (const item of args) { // eslint-disable-line no-restricted-syntax
    if (typeof item === 'string' || item instanceof String) {
      target[item] = item;
    } else {
      throw Error('all enums should be strings');
    }
  }

  return new Proxy(target, handler);
};
