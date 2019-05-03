import getRustFactor from './get-rust-factor';

export default json => {
  const { head, body } = json.data;

  const modules = body
    .map(module => {
      const packageObj = module.reduce((obj, detail, idx) => {
        const key = head[idx].toLowerCase();
        obj[key] = detail;
        return obj;
      }, {});

      return packageObj
    }, {});

  modules.forEach(module => {
    module.rust = getRustFactor(module);
  });

  return modules;
};
