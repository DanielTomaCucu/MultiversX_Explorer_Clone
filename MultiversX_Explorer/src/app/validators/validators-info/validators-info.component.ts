import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { IdentitiesService } from './identities/identities.service';
import { ValidatorsInfoService } from './validators-info.service';

@Component({
  selector: 'app-validators-info',
  templateUrl: './validators-info.component.html',
  styleUrls: ['./validators-info.component.scss'],
})
export class ValidatorsInfoComponent {
  dataSource: any;
  displayedColumns = ['#', 'name', 'stake', 'cumulative', 'nodes'];
  subscription: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private validatorsInfo: ValidatorsInfoService,
    private router: Router,
    private identitiesService: IdentitiesService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription.add(
      this.validatorsInfo.getProviders().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      })
    );
  }
  redirectToValidator(identity: string, provider: string) {
    this.router.navigate(['/identities', identity]);
    localStorage.setItem('provider', provider);
    this.identitiesService.getIdentity(identity);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
