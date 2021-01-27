import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {countBy} from 'lodash';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {
  inputLines: string[];
  result: string[];


  ngOnInit(): void {
    this.inputLines = ['asdf', 'fdas', 'asds', 'd fm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];
    this.result = this.inputLines
      .filter(line => {
        for (const elem of Object.keys(countBy(line))) {
          if (countBy(line)[elem] === 2) {
            return true;
          }
        }
      });
    console.log(this.result);
  }
}
