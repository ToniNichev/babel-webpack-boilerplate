/* eslint-disable no-console */
const test = (msg) => {
  console.log(msg);
  const arr = [1, 2, 3];
  const iAmJavascriptES6 = () => console.log(...arr);
  window.iAmJavascriptES6 = iAmJavascriptES6;
}

export default test;
