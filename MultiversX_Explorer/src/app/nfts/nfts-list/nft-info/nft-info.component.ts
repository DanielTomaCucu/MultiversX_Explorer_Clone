import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';
import { NftInfoService } from './nft-info.service';

@Component({
  selector: 'app-nft-info',
  templateUrl: './nft-info.component.html',
  styleUrls: ['./nft-info.component.scss'],
})
export class NftInfoComponent {
  private infoNft: any;
  constructor(
    private nftInfoService: NftInfoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.loadNft();
  }
  loadNft() {
    const collection: any = this.route.snapshot.paramMap.get('nft');
    this.nftInfoService.getNftInfo(collection).subscribe((data) => {
      console.log(data);
    });
  }
}
