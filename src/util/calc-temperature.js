function groupById(data, key) {
  return data.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x); //eslint-disable-line
    return rv;
  }, {});
}

function calculateAverage(data) {
  const length = data.length || 0;
  const accTemp = data.reduce((acc, curr) => {
    return acc + curr.temperature;
  }, 0);

  return (accTemp / length).toFixed(2);
}

function calculateMedian(data) {
  const length = data.length || 0;
  const half = Math.floor(length / 2);
  const temperatures = [];
  let median = 0.0;

  data.forEach((d) => {
    temperatures.push(d.temperature);
  });
  const tempData = temperatures.sort((a, b) => {
    return a - b;
  });
  if (length % 2 === 0) {
    median = ((tempData[half - 1] + tempData[half]) / 2);
  } else {
    median = tempData[half];
  }

  return median.toFixed(2);
}

function calculateMode(data) {
  /**
  * The "mode" is the number that is repeated most often.
  */
  const temperatures = [];
  const modes = [];
  const frequency = {};
  let maxFreq = 0;

  data.forEach((d) => {
    temperatures.push(d.temperature);
  });

  for (const i in temperatures) { //eslint-disable-line
    frequency[temperatures[i]] = (frequency[temperatures[i]] || 0) + 1; // increment frequency
    if (frequency[temperatures[i]] > maxFreq) {
      maxFreq = frequency[temperatures[i]];
    }
  }

  for (const k in frequency) { // eslint-disable-line
    if (frequency[k] === maxFreq) {
      modes.push(k);
    }
  }

  return modes.sort((a, b) => {
    return a - b;
  });
}

/** Sorting temperature data object based on Average Temperature */

function sortByAvg(tempArray) {
  return tempArray.sort((a, b) => {
    const x = a.average;
    const y = b.average;
    return ((x < y) ? -1 : ((x > y) ? 1 : 0)); // eslint-disable-line
  });
}

export function calculateTemparature(data) {
  const tempData = groupById(data, 'id');
  const tempJSON = [];
  const keysArray = Object.keys(tempData);
  keysArray.forEach((key) => {
    const tempObj = {};
    tempObj.id = key;
    tempObj.average = calculateAverage(tempData[key]);
    tempObj.median = calculateMedian(tempData[key]);
    tempObj.mode = calculateMode(tempData[key]);
    tempJSON.push(tempObj);
  });
  return sortByAvg(tempJSON);
}
