import { Component } from '@angular/core';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.scss'],
})
export class ConversionsComponent {
  feetOutput: any;
  inchesOutput: any;
  metersOutput: any;

  convertFeetToInches(feetInput: any) {
    if (!isNaN(feetInput)) {
      this.inchesOutput = feetInput * 12;
      this.metersOutput = feetInput * 0.3048;
    }
  }

  convertInchesToFeet(inchesInput: any) {
    if (!isNaN(inchesInput)) {
      this.feetOutput = inchesInput * 0.0833;
      this.metersOutput = inchesInput * 0.0255;
    }
  }

  convertMetersToFeet(meterInput: any) {
    if (!isNaN(meterInput)) {
      this.inchesOutput = meterInput * 39.26;
      this.feetOutput = meterInput * 3.28;
    }
  }
}
