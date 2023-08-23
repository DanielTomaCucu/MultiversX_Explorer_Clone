import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BlocksComponent } from './blocks/blocks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NftsComponent } from './nfts/nfts.component';
import { TokensComponent } from './tokens/tokens.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ValidatorsComponent } from './validators/validators.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blocks', component: BlocksComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'tokens', component: TokensComponent },
  { path: 'nfts', component: NftsComponent },
  { path: 'validators', component: ValidatorsComponent },
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
