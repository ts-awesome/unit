module.exports = {
    testMatch: [
        "**/*.spec.(ts|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    coverageReporters: ['html', 'text', 'text-summary'],
    collectCoverageFrom: ['src/**/*.ts', '!src/scales/**/*.ts', '!**/node_modules/**'],
}
