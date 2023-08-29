import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { NetworkInfoComponent } from './network-info/network-info.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { LargeNumberPipe } from './largeNumber.pipe';
import { TruncateMiddlePipe } from './truncate-middle.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { RelativeTimePipe } from './relativeTime.pipe';
import { LoadingSpinnerService } from './loading-spinner.service';


@NgModule({
  providers: [],
  declarations: [
    TruncatePipe,
    NetworkInfoComponent,
    LargeNumberPipe,
    TruncateMiddlePipe,
    CapitalizePipe,
    RelativeTimePipe,
  ],
  imports: [CommonModule, FormsModule, MatCardModule],
  exports: [
    TruncatePipe,
    NetworkInfoComponent,
    LargeNumberPipe,
    TruncateMiddlePipe,
    CapitalizePipe,
    RelativeTimePipe,
  ],
})
export class SharedModule {}
