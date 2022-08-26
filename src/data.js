// localStorage.setItem();
// localStorage.getItem();
// localStorage.removeItem();
// localStorage.key();
// JSON.parse()
// JSON.stringify()

const key = 'odin';
// key: app name, JSON for each column
// title, cards
export function saveColumnData(columns) {
  // const savedData = localStorage.getItem(key);
  const newCol = mapToObj(columns);
  localStorage.setItem(key, JSON.stringify(newCol));
  console.log('new data: ' + JSON.stringify(newCol));
}

function mapToObj(inputMap) {
  let obj = {};

  inputMap.forEach(function (value, key) {
    obj[key] = value;
  });

  return obj;
}

export function getColumnData() {
  //   localStorage.clear();
  const data = localStorage.getItem(key);
  //   console.log(JSON.parse(data));
  return JSON.parse(data);
}

// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value);
// }

// if (storageAvailable('localStorage')) {
//   // Yippee! We can use localStorage awesomeness
// } else {
//   // Too bad, no localStorage for us
// }

// function storageAvailable(type) {
//   let storage;
//   try {
//     storage = window[type];
//     const x = '__storage_test__';
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   } catch (e) {
//     return (
//       e instanceof DOMException &&
//       // everything except Firefox
//       (e.code === 22 ||
//         // Firefox
//         e.code === 1014 ||
//         // test name field too, because code might not be present
//         // everything except Firefox
//         e.name === 'QuotaExceededError' ||
//         // Firefox
//         e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//       // acknowledge QuotaExceededError only if there's something already stored
//       storage &&
//       storage.length !== 0
//     );
//   }
// }
