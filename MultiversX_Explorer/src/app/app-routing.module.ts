import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountNftsComponent } from './accounts/accounts-details/account-nfts/account-nfts.component';
import { AccountsDetailsComponent } from './accounts/accounts-details/accounts-details.component';
import { EsdtTokensComponent } from './accounts/accounts-details/esdt-tokens/esdt-tokens.component';

import { AccountsComponent } from './accounts/accounts.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BlocksComponent } from './blocks/blocks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NftDetailsComponent } from './nfts/nfts-list/nft-details/nft-details.component';
import { NftInfoComponent } from './nfts/nfts-list/nft-info/nft-info.component';
import { NftsComponent } from './nfts/nfts.component';
import { TokenDetailsComponent } from './tokens/tokens-list/token-details/token-details.component';
import { TokensComponent } from './tokens/tokens.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TxHashComponent } from './tx-hash/tx-hash.component';
import { NodesInfoComponent } from './validators/nodes/nodes-info/nodes-info.component';
import { NodesComponent } from './validators/nodes/nodes.component';
import { ProvidersDetailsComponent } from './validators/providers/providers-details/providers-details.component';
import { ProvidersComponent } from './validators/providers/providers.component';
import { QueueComponent } from './validators/queue/queue.component';
import { StatisticsComponent } from './validators/statistics/statistics.component';
import { IdentitiesComponent } from './validators/validators-info/identities/identities.component';
import { ValidatorsInfoComponent } from './validators/validators-info/validators-info.component';
import { ValidatorsComponent } from './validators/validators.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blocks', component: BlocksComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transactions/:txHash', component: TxHashComponent },
  { path: 'accounts', component: AccountsComponent },
  {
    path: 'accounts/:address',
    component: AccountsDetailsComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'tokens', component: EsdtTokensComponent },
      { path: 'nfts', component: AccountNftsComponent },
    ],
  },
  { path: 'tokens', component: TokensComponent },
  { path: 'tokens/:identifier', component: TokenDetailsComponent },
  { path: 'collections', component: NftsComponent },
  { path: 'collections/:collection', component: NftDetailsComponent },
  { path: 'nfts', component: NftsComponent },
  { path: 'nfts/:nft', component: NftInfoComponent },
  {
    path: 'validators',
    component: ValidatorsComponent,
    children: [
      { path: 'stats', component: ValidatorsInfoComponent },
      { path: 'providers', component: ProvidersComponent },
      { path: 'nodes', component: NodesComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'queue', component: QueueComponent },
      { path: '', redirectTo: 'stats', pathMatch: 'full' },
    ],
  },
  { path: 'identities/:name', component: IdentitiesComponent },
  { path: 'providers/:address', component: ProvidersDetailsComponent },
  { path: 'nodes/:bls', component: NodesInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
