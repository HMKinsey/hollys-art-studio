module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.(css|jpg|jpeg|png|gif|webp|svg)$':
      '<rootDir>/__tests__/fileTransformer.cjs',
  },
};
