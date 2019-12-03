import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "summary"
})
export class CustomPipe implements PipeTransform{
    transform(value: string, length?: number, ...args: any[]) {
        if(!value)
            return null;
        let actualLimit = (length) ? length : 20;
        return value.substr(0, length) + '...';
    }

}