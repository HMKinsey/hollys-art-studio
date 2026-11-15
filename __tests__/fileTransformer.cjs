module.exports = {
  process(_sourceText, sourcePath) {
    const filename = sourcePath.split(/[\\/]/).pop();
    return {
      code: `module.exports = ${JSON.stringify(filename)};`,
    };
  },
};
