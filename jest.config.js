module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "<rootDir>/node_modules/babel-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    globals: {
        "ts-jest": {
            diagnostics: {
                warnOnly: true
            }
        }
    },

    // Setup Enzyme
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFiles: ["<rootDir>/src/setupTests.ts"]
};
