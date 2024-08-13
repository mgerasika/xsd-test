var validator = require('xsd-schema-validator');

async function run() {
    try {
        const result = await validator.validateXML({ file: 'str-austria.xml' }, 'str-austria.xsd');

        result.valid; // true
    } catch (err) {
        console.error('validation error', err);
    }
}
run();