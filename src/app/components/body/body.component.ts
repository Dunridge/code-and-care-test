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

  // TODO: обратите внимание (многие ребята допускают ошибку на этом),  что нужно
  //  вывести те строки, в которых хотя бы один из символов встречается ровно 2 раза,
  //  использовать stdin и скинуть все на ideone.

  ngOnInit(): void {
    this.inputLines = ['asdf', 'fdas', 'asds', 'd fm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];
    this.result = this.inputLines
      // .filter(line => Object.keys(countBy(line)).forEach(elem => countBy(line)[elem] === 2));
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
