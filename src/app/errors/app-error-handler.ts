import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        alert("An unexpected error occurred");
        console.log(error);
    }
}