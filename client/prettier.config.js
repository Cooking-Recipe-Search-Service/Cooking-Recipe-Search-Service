module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    htmlWhitespaceSensitivity: 'ignore',
    plugins: ['prettier-plugin-organize-attributes', '@prettier/plugin-xml'],
    attributeGroups: [
        '$ANGULAR_STRUCTURAL_DIRECTIVE',
        '$ANGULAR_ELEMENT_REF',
        '$ID',
        '$DEFAULT',
        '$CLASS',
        '$ANGULAR_ANIMATION',
        '$ANGULAR_ANIMATION_INPUT',
        '$ANGULAR_INPUT',
        '$ANGULAR_TWO_WAY_BINDING',
        '$ANGULAR_OUTPUT',
    ],
    overrides: [
        {
            files: '*.html',
            options: {
                printWidth: 80,
                parser: 'html',
            },
        },
        {
            files: '*.less',
            options: {
                printWidth: 120,
                parser: 'less',
            },
        },
    ],
};
