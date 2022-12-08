import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseId',
  standalone: true
})
export class CaseIdPipe implements PipeTransform {

  transform(value: string): string {
    let group1 = value.substring(0,4)
    let group2 = value.substring(4,8)
    let group3 = value.substring(8,12)
    let group4 = value.substring(12,16)
    return group1 + "-" + group2 + "-" + group3 + "-" + group4
  }

}
