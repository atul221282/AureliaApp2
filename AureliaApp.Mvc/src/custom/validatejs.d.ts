declare module 'aurelia-validatejs' {
    import {
        metadata
    } from 'aurelia-metadata';
    import {
        ValidationError,
        Validator as ValidatorInterface
    } from 'aurelia-validation';
    import validate from 'validate.js';
    export const metadataKey: any;
    export class ValidationRule {
        name: any;
        config: any;
        constructor(name?: any, config?: any);
        static date(config?: any): ValidationRule;
        static datetime(config?: any): ValidationRule;
        static email(config?: any): ValidationRule;
        static equality(parameter: string, config?: any): ValidationRule;
        static exclusion(config?: any): ValidationRule;
        static format(config?: any): ValidationRule;
        static inclusion(config?: any): ValidationRule;
        static lengthRule(config?: any): ValidationRule;
        static numericality(config?: any): ValidationRule;
        static presence(config?: any): ValidationRule;
        static url(config?: any): ValidationRule;
    }
    export function cleanResult(data?: any): any;
    export class ValidationRules {
        rules: any;
        static ensure(prop?: any): ValidationRules;
        on(target?: any): ValidationRules;
        decorate(): ValidationRules;
        addRule(key?: any, rule?: any): ValidationRules;
        ensure(prop?: any): ValidationRules;
        length(configuration?: any): ValidationRules;
        presence(configuration?: any): ValidationRules;
        required(configuration?: any): ValidationRules;
        numericality(configuration?: any): ValidationRules;
        date(configuration?: any): ValidationRules;
        datetime(configuration?: any): ValidationRules;
        email(configuration?: any): ValidationRules;
        equality(configuration?: any): ValidationRules;
        format(configuration?: any): ValidationRules;
        inclusion(configuration?: any): ValidationRules;
        exclusion(configuration?: any): ValidationRules;
        url(configuration?: any): ValidationRules;
    }
    export function base(targetOrConfig?: any, key?: any, descriptor?: any, rule?: any): any;
    export function addRule(target?: any, key?: any, descriptor?: any, targetOrConfig?: any, rule?: any): any;
    export function length(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function presence(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function required(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function date(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function datetime(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function email(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function equality(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function exclusion(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function inclusion(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function format(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function url(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export function numericality(targetOrConfig?: any, key?: any, descriptor?: any): any;
    export class Validator {
        _validate(object?: any, propertyName?: any, rules?: any): any;
        validateProperty(object?: any, propertyName?: any, rules?: any): any;
        validateObject(object?: any, rules?: any): any;
    }
    export function configure(config?: any): any;
}