import { Component, Input, OnInit} from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {

  ngOnInit(): void {
    if(!this.gif)
    throw new Error('Property is required.');
  }

  @Input()
  public gif!: Gif;


}
