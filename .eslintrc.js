module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json"
    },
    plugins: ["react", "react-hooks", "prettier", "@typescript-eslint"],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
