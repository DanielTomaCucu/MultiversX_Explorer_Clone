import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { NetworkInfoComponent } from './network-info/network-info.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [TruncatePipe, NetworkInfoComponent],
  imports: [CommonModule, FormsModule, MatCardModule],
  exports: [TruncatePipe, NetworkInfoComponent],
})
export class SharedModule {}
