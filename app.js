const getUrlParam = targetKey => {
  try {
    const keyValue = location.search.slice(1).split('&').map(v => v.split('=')).filter(v => v[0] === targetKey)[0];
    return decodeURIComponent(keyValue[1]);
  } catch {
    return undefined;
  }
};
