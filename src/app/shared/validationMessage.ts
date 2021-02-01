export const validationMessage = {
    'login': {
        'username': {
            'required': 'Username is required.',
            //'email': 'Email not in valid format.'
        },
        'password': {
            'required': 'Password is required.',
            'minlength': 'Password must be at least 8 characters long.',

        }
    },
    'register': {
        'roles': {
            'required': "Veuillez choisir le types d'utilisateurs.",
        },
        'nom': {
            'required': 'Le champ nom est obligatoire.',
            'minlength': 'Ce champ doit contenir 2 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },
        'prenom': {
            'required': 'Le champ prenom est obligatoire.',
            'minlength': 'Ce champ doit contenir 2 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 8 caracteres au plus.'
        },
        'username': {
            'required': 'Le champ username est obligatoire.',
            'minlength': 'Ce champ doit contenir 6 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 20 caracteres au plus.'
        },
        'email': {
            'required': 'Le champ Email est obligatoire.',
            'email': 'Email non valide.'
        },
        'telephone': {
            'required': 'Le champ telephone est obligatoire.',
            'pattern': 'Ce Champ doit contenir uniquement des nombres.'
        },
        'photosProfil': {
            'required': " photos de profil de l'agent obligatoire.",
            'minlength': 'Ce champ doit contenir 8 caracteres au moins.',
        },
        'fonction': {
            'required': " Fonction de l'agent obligatoire.",
            'minlength': 'Ce champ doit contenir 8 caracteres au moins.',
        },
        'password': {
            'required': 'Le champ password est obligatoire.',
            'minlength': 'Ce champ doit contenir 8 caracteres au moins.',
        }
    },
    'registerSociete': {
        'nomSociete': {
            'required': "Le champ est obligatoire.",
            'minlength': 'Ce champ doit contenir 2 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },
        'matriculeFis': {
            'required': "Ce champ est obligatoire.",
            'minlength': 'Ce champ doit contenir 8 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },
        'NumAffiCnss': {
            'required': 'Ce champs est obligatoire',
            'minlength': 'Ce champ doit contenir 6 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },
        'gouvernorats': {
            'required': "Veuillez choisir le gouvernorat"
        },
        'codePost': {
            'required': "Ce champ est obligatoire",
            'minlength': 'Ce champ doit contenir 2 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 10 caracteres au plus.'
        },
        'tel': {
            'required': 'Le champ telephone est obligatoire.',
            'pattern': 'Ce doit contenir uniquement des nombres.',
            'minlength': 'Ce champ doit contenir 8 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },
        'emailSociete': {
            'required': "L'Email de l'agence est obligatoire.",
            'email': 'Email non valide.'
        },
        'adresse': {
            'required': "Le champ adresse est obligatoire.",
        },
        'local': {
            'required': 'Le champ ville est obligatoire..',
        },
        'secActivite': {
            'required': 'Ce champ est obligatoire.',
        },

        'formJur': {
            'required': 'Le champ nbPtVente est obligatoire.',
        },
        'nomPrenomContact': {
            'required': 'Ce champ est obligatoire.',
            'minlength': 'Ce champ doit contenir 2 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },
        'qualite': {
            'required': 'Ce champ est obligatoire.',
            'minlength': 'Ce champ doit contenir 2 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },
        'telContact': {
            'required': 'Le champ telephone est obligatoire.',
            'pattern': 'Ce doit contenir uniquement des nombres.',
            'minlength': 'Ce champ doit contenir 8 caracteres au moins.',
            'maxlength': 'Ce champ doit contenir 25 caracteres au plus.'
        },

    }
};

