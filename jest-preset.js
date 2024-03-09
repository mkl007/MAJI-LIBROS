// jest-preset.js

export default {
    // Global Jest presets or configurations
    // For example:
    setupFilesAfterEnv: ['./setupTests.js'], // Path to setup file
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
  