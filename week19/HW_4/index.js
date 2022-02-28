class Validator {
    constructor(validatedObject){
        this.validatedObject = validatedObject
    }

    isEmail(){
        let regExp = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
        if(regExp.test(this.validatedObject)){
            return true;
        }
        return false
    }
    isDomain(){
        let regExp = new RegExp(/^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/)
        if(regExp.test(this.validatedObject)){
            return true
        }
        return false
    }

    isDate(){
        let regExp = new RegExp(/^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/)
        if(regExp.test(this.validatedObject)){
            return true;
        }
        return false
    }
    isNumber(){
        const regExp = new RegExp(/^\+(380)([1-9]{9})$/);
        if (regExp.test(this.validatedObject)){
            return true
        }
        return false;
    }
}
class ValidatorStatic {
    constructor(validatedObject){
        this.validatedObject = validatedObject
    }

    static isEmail(validatedObject){
        let regExp = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
        if(regExp.test(validatedObject)){
            return true;
        }
        return false
    }
    static isDomain(validatedObject){
        let regExp = new RegExp(/^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/);
        if(regExp.test(validatedObject)){
            return true
        }
        return false
    }

    static isDate(validatedObject){
        let regExp = new RegExp(/^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/);
        if(regExp.test(validatedObject)){
            return true;
        }
        return false
    }

    static isNumber(validatedObject){
        const regExp = new RegExp(/^\+(380)([1-9]{9})$/);
        if (regExp.test(validatedObject)){
            return true
        }
        return false;
    }
}
