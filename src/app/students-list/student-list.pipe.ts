import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentList'
})
export class StudentListPipe implements PipeTransform {

  transform(value: string): any {
    let nameStudent = value.split(' ');
    let name = '';
    let serName = '';
    name = nameReform(nameStudent[1]);
    serName = nameReform(nameStudent[2]);

    return `${nameStudent[0]} ${name}.${serName}`;
  }

}

function nameReform(val:string):string {
  val.toLocaleUpperCase();
  return val[0];
}
