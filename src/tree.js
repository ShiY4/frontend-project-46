import _ from 'lodash';

const getDifTree = (obj1, obj2) => {
  const getKeys = (obj) => Object.keys(obj);
  const allKeys = _.union(getKeys(obj1), getKeys(obj2));
  const sorted = _.sortBy(allKeys);
  return sorted.map((key) => {
    if (
      _.has(obj1, key)
      && _.has(obj2, key)
      && _.isPlainObject(obj1[key])
      && _.isPlainObject(obj2[key])
    ) {
      return {
        type: 'parent',
        key,
        children: getDifTree(obj1[key], obj2[key]),
      };
    }

    if (
      (_.has(obj1, key)
        && _.has(obj2, key)
        && _.isPlainObject(obj1[key])
        && !_.isPlainObject(obj2[key]))
      || (_.has(obj1, key)
        && _.has(obj2, key)
        && !_.isPlainObject(obj1[key])
        && _.isPlainObject(obj2[key]))
    ) {
      return {
        type: 'diffValue',
        key,
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    }

    if (
      _.has(obj1, key)
      && !_.has(obj2, key)
      && _.isPlainObject(obj1[key])
    ) {
      return {
        type: 'deleted',
        key,
        value: obj1[key],
      };
    }

    if (
      !_.has(obj1, key)
      && _.has(obj2, key)
      && _.isPlainObject(obj2[key])
    ) {
      return {
        type: 'added',
        key,
        value: obj2[key],
      };
    }

    if (_.has(obj1, key)) {
      if (!_.has(obj2, key)) {
        return {
          type: 'deleted',
          key,
          value: obj1[key],
        };
      }

      if (obj1[key] === obj2[key]) {
        return {
          type: 'stay same',
          key,
          value: obj1[key],
        };
      }

      return {
        type: 'diffValue',
        key,
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    }

    return {
      type: 'added',
      key,
      value: obj2[key],
    };
  });
};

export default getDifTree;
