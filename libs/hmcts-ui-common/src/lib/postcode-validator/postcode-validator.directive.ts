import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from "@angular/forms";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: "[euiPostcodeValidator]",
  standalone: true,
})
export class PostcodeValidatorDirective implements Validator {
  private regex = new RegExp(
    `/^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/gm`
  );

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const badValue = this.regex.test(control.value);
      return badValue ? { badValue: { value: control.value } } : null;
    };
  }
}
