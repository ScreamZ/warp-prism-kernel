import * as validator from "ajv";

/**
 * Manage image in your application
 */
export class ValidatorService {
    private validator: validator.Ajv;

    constructor() {
        this.validator = new validator({ useDefaults: true });
    }

    /**
     * Compile a JSON schema for future use in order to speed up validation.
     * @param schema - a JSON scheme
     */
    public validate(schema: any, data: any): boolean | validator.Thenable<any> {
        return this.validator.validate(schema, data);
    }

    /**
     * Get errors for last validation and reset the errors.
     */
    public getErrors() {
        const errors = { errors: { ...this.validator.errors }, errorsText: { ...this.validator.errorsText } };
        this.validator.errors = null;
        return errors;
    }
}
