import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute, public scully: ScullyRoutesService) {
    console.log('blog');
    this.scully.available$.subscribe(r => {
      console.log(r);
    });
  }
}
