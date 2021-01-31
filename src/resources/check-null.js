const checkNull = (items) => {
  let trigger = true;

  if (Array.isArray(items)) {
    if (items.length === 0) {
      trigger = false;
    } else {
      for (let i = 0; i < items.length; i + 1) {
        if (items[i] === '' || items[i] === null || items[i] === undefined || items[i].toString().toLowerCase() === '- - -') trigger = false;
      }
    }
  } else if (items instanceof Object) {
    if (Object.keys(items).length === 0 && items.constructor === Object) trigger = false;
  } else if (items === '' || items === null || items === undefined || items.toString().toLowerCase() === '- - -' || items.toString().toLowerCase() === 'undefined') trigger = false;

  return trigger;
};

export default checkNull;
