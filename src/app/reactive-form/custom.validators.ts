import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if( (control.value as string).indexOf(' ') >=0 )
            return { cannotContainSpace: true};
        return null;
    }

    // for validations requiring async operation we need to use asynchronous validator
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors|null> {
        // simulating the server call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string).toLowerCase() == 'saurabh')
                    resolve({ shouldBeUnique: true});
                else
                    resolve(null);
            }, 2000);
        });
    }
}