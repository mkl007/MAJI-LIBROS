export default {
  // Global Jest presets or configurations
  testEnvironment: 'node', // Test environment setup
  collectCoverage: true, // Enable coverage collection
  coverageThreshold: { // Define coverage thresholds
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
