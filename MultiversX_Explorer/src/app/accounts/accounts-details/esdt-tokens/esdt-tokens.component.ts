import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsdtTokensService } from './esdt-tokens.service';

@Component({
  selector: 'app-esdt-tokens',
  templateUrl: './esdt-tokens.component.html',
  styleUrls: ['./esdt-tokens.component.scss'],
})
export class EsdtTokensComponent {
  tokens: any;
  address: any;
  constructor(
    private estdTokensService: EsdtTokensService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route?.parent?.paramMap.subscribe((params) => {
      this.address = params.get('address');
    });

    this.estdTokensService.getTokens(this.address).subscribe((data) => {
      console.log(data);
      this.tokens = data;
    });
  }
}
