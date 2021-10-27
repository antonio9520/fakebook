export default function  useResizeArray(
  array?: Array<any>,
  minNumber?: number,
  maxNumber?: number
) {
  if (array === undefined || Array.isArray(array) === false) return [];

  const start = minNumber ? minNumber : 0;
  const finish = maxNumber ? maxNumber : array.length;
  const resizedArray: Array<any> = [];

  for (let i = start; i < finish; i++) {
    resizedArray.push(array[i]);
  }

  return resizedArray;
}
