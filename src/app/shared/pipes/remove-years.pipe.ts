import { Pipe, PipeTransform, signal } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'removeYears'
})
export class RemoveYearsPipe implements PipeTransform {
    transform(value: string): string {
        // Remove anos no formato (YYYY - YYYY), (YYYY), ou (YYYY - Present)
        return value.replace(/\(\d{4}( - (\d{4}|Present))?\)/g, '').trim();
    }
}
