
"use strict";

let current;
let langs;

class Language {

    constructor(languages, $translate, $rootScope) {
        langs = languages;
        $rootScope.$on('$routeChangeSuccess', (event, target) => {
            if (target.params.language && target.params.language != current) {
                current = target.params.language;
                $translate.refresh();
            }
            $translate.use(current);
        });
    }

    get current() {
        return current;
    }

    set current(lang) {
        current = lang;
    }

    get list() {
        return langs;
    }

};

Language.$inject = ['languages', '$translate', '$rootScope'];

export {Language};

