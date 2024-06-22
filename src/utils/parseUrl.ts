const parseURLAPI = (url: string): string => {
  const urlArray = url.replace('/api/', '');
  return urlArray;
}

export default parseURLAPI;