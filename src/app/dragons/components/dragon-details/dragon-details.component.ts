import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from '../../models/dragon';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {

  dragon: Dragon = new Dragon();

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data) => {
        this.dragon = new Dragon(data.dragon);
      }
    );
  }

}
