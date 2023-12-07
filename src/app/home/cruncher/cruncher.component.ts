import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cruncher',
  templateUrl: './cruncher.component.html',
  styleUrls: ['./cruncher.component.scss'],
})
export class CruncherComponent {
  calculatorForm: FormGroup;

  output?: number;
  @Input() sign: string = '';

  constructor(private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      input1: [0],
      input2: [0],
    });
  }

  calculate(): void {
    const input1 = this.calculatorForm.get('input1')?.value;
    const input2 = this.calculatorForm.get('input2')?.value;
    switch (this.sign) {
      case '+':
        this.output = input1 + input2;
        break;
      case '-':
        this.output = input1 - input2;
        break;
      case '*':
        this.output = input1 * input2;
        break;
      case '/':
        this.output = input1 / input2;
        break;
      case '%':
        this.output = input1 % input2;
        break;

      default:
        this.output = 0;
        break;
    }
  }
}
