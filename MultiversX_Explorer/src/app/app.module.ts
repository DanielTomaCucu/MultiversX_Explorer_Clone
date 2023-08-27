import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatListModule,
    AppRoutingModule,
    SharedModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
