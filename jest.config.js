module.exports = {
  roots: ['<rootDir>/src/__tests__'],
  testRegex: '__tests__/(.+)\\.test\\.[jt]sx?$',
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
};
