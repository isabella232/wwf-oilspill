// https://github.com/Leaflet/Leaflet/blob/b507e21c510b53cd704fb8d3f89bb46ea925c8eb/src/core/Util.js#L165
const templateRe = /\{ *([\w_-]+) *\}/g;

export function template(str: string, data: any) {
  return str.replace(templateRe, function (str, key) {
    let value = data[key];

    if (value === undefined) {
      throw new Error('No value provided for variable ' + str);
    } else if (typeof value === 'function') {
      value = value(data);
    }
    return value;
  });
}
