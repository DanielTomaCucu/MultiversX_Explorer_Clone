import { Component } from '@angular/core';
import { ValidatorsService } from './validators.service';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss'],
})
export class ValidatorsComponent {
  validatorsList: any;
  constructor(private validatorsService: ValidatorsService) {}
/*   ngOnInit() {
    this.validatorsService.getValidators().subscribe((data) => {
      this.validatorsList = data;

    }); */
  }

