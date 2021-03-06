import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CornerstoneServiceService } from '../../services/cornerstone-service.service';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    @ViewChild('cornerStoneDemo', {static: true})
    cornerStoneDemo: ElementRef;
    navioption: NavigationOptions
    constructor(private navCtrl: NavController,
                private route: ActivatedRoute) {
    }
    goToEchartsDemo() {
        this.navCtrl.navigateForward(['./echarts'], { relativeTo: this.route });
    }

    ngOnInit() {
        const element = this.cornerStoneDemo.nativeElement;
        const imageId = 'https://example.url.com/image.dcm';
        console.info(element);
       // this.cs.cornerstone.enable(element);
        /*this.cs.cornerstone.loadAndCacheImage(imageId).then((image) => {
          console.info('a');
        });*/
    }

}
