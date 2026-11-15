module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.ts?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.(css|jpg|jpeg|png|gif|webp|svg)$':
      '<rootDir>/src/test/fileTransformer.cjs',
  },
};
