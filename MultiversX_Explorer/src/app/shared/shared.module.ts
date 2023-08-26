import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { NetworkInfoComponent } from './network-info/network-info.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { LargeNumberPipe } from './largeNumber.pipe';



@NgModule({
  declarations: [TruncatePipe, NetworkInfoComponent,LargeNumberPipe],
  imports: [CommonModule, FormsModule, MatCardModule],
  exports: [TruncatePipe, NetworkInfoComponent,LargeNumberPipe],
})
export class SharedModule {}
