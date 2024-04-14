const nextJest = require('next/jest')

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
	verbose: true,
	testMatch: [
		"**/*.test.{ts,tsx}", // Match all files ending with .test.js
		"**/*.spec.{ts,tsx}"  // Match all files ending with .spec.js
	],
	collectCoverage: true,
	collectCoverageFrom: [
		'./**/*.{ts,tsx}',
		'!./**/*.next/**/*',
		'!**/Metrika/**/*',
	],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
