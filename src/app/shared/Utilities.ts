export class Utilities {
    constructor() {
    }

    onValueChanged(data?: any, Pageform?: any, formErros?: any, validationMessage?: any) {
        if (!Pageform) {
            return;
        }
        const form = Pageform;
        for (const field in formErros) {
            if (formErros.hasOwnProperty(field)) {
                // clear previous error message (if any)
                formErros[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = validationMessage[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            formErros[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    public questions = [
        'Signaler un probleme',
        'Proposer une ameliorations',
        'Poser une questions',
        'Signaler un beug',
        'Deposer une reclamation'
    ]  ;

}



