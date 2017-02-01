import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    return (args.length == 2) ? value.replace(args[0], args[1]) : value;
  }

}
