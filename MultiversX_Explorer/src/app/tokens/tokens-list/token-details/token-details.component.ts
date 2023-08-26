import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenDetailsService } from './token-details.service';

@Component({
  selector: 'app-token-details',
  templateUrl: './token-details.component.html',
  styleUrls: ['./token-details.component.scss'],
})
export class TokenDetailsComponent {
  tokenDetails: any;
  constructor(
    private tokenDetailsService: TokenDetailsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('identifier');
    this.tokenDetailsService
      .getTokensDetails(identifier)
      .subscribe((data) => console.log(data));
  }
}
