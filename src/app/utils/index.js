export default {
  getParams: (search) => {
    const params = {};
    search.split('?')[1].split('&').forEach(param => {
      params[param.split('=')[0]] = param.split('=')[1];
    });
    return params;
  }
};
