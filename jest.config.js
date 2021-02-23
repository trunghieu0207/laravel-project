const js_dir = './resources/js';

// eslint-disable-next-line no-undef
module.exports = {
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    collectCoverageFrom: [`!${js_dir}/*.{js,ts}`],
    modulePathIgnorePatterns: ['<rootDir>/public/ts']
};
