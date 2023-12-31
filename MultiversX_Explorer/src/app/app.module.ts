import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsComponent } from './accounts/accounts.component';
import { TokensComponent } from './tokens/tokens.component';
import { NftsComponent } from './nfts/nfts.component';
import { ValidatorsComponent } from './validators/validators.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BlocksComponent } from './blocks/blocks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SharedModule } from './shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AccountsDetailsComponent } from './accounts/accounts-details/accounts-details.component';
import { TokensListComponent } from './tokens/tokens-list/tokens-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { TokenDetailsComponent } from './tokens/tokens-list/token-details/token-details.component';
import { NftsListComponent } from './nfts/nfts-list/nfts-list.component';
import { NftDetailsComponent } from './nfts/nfts-list/nft-details/nft-details.component';

import { NftDetailsTabelComponent } from './nfts/nfts-list/nft-details-tabel/nft-details-tabel.component';
import { NftInfoComponent } from './nfts/nfts-list/nft-info/nft-info.component';
import { LoadingInterceptor } from './shared/loading-interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerService } from './shared/loading-spinner.service';
import { TxHashComponent } from './tx-hash/tx-hash.component';
import { ProvidersComponent } from './validators/providers/providers.component';
import { ProvidersDetailsComponent } from './validators/providers/providers-details/providers-details.component';
import { NodesComponent } from './validators/nodes/nodes.component';
import { StatisticsComponent } from './validators/statistics/statistics.component';
import { QueueComponent } from './validators/queue/queue.component';
import { ValidatorsInfoComponent } from './validators/validators-info/validators-info.component';
import { MatMenuModule } from '@angular/material/menu';
import { IdentitiesComponent } from './validators/validators-info/identities/identities.component';
import { NodesInfoComponent } from './validators/nodes/nodes-info/nodes-info.component';
import { EsdtTokensComponent } from './accounts/accounts-details/esdt-tokens/esdt-tokens.component';
import { RouterModule } from '@angular/router';
import { AccountNftsComponent } from './accounts/accounts-details/account-nfts/account-nfts.component';
import { LatestBlocksComponent } from './dashboard/latest-blocks/latest-blocks.component';
import { LastTransactionsComponent } from './dashboard/last-transactions/last-transactions.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    TokensComponent,
    NftsComponent,
    ValidatorsComponent,
    AnalyticsComponent,
    BlocksComponent,
    TransactionsComponent,
    AccountsDetailsComponent,
    TokensListComponent,
    TokenDetailsComponent,
    NftsListComponent,
    NftDetailsComponent,

    NftDetailsTabelComponent,
    NftInfoComponent,
    TxHashComponent,
    ProvidersComponent,
    ProvidersDetailsComponent,
    NodesComponent,
    StatisticsComponent,
    QueueComponent,
    ValidatorsInfoComponent,
    IdentitiesComponent,
    NodesInfoComponent,
    EsdtTokensComponent,
    AccountNftsComponent,
    LatestBlocksComponent,
    LastTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatListModule,
    SharedModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    RouterModule,
  ],
  providers: [
    LoadingSpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
