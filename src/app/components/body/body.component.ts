import {Component, OnInit} from '@angular/core';

/*
Здравствуйте! Проверку английского успешно прошли)
Отправляю тестовое задание.
https://docs.google.com/document/d/1_8rVAjGmLL4U2c3YkIcrt5WZqru1tc3U-bqVlaWVStA/edit#heading=h.xlfxrw3h3nzh
Пожалуйста, обратите внимание (многие ребята допускают ошибку на этом),
что нужно вывести те строки, в которых хотя бы один из символов встречается
ровно 2 раза, использовать stdin и скинуть все на ideone.
(see the test task doc)

Сможете сделать до завтра?

Challenge
Create a program that will read the standard input line by line and will print lines
from the input that has any character in it appearing exactly two times.
Sample

Input
asdf
fdas
asds
d fm
dfaa
aaaa
aabb
aaabb

Output
asds
dfaa
aabb
aaabb

TODO: show the most effective approach
* */

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  inputLines: string[];
  result: string[];
  // TODO: print those where where there's at least two identical symbols
  // result should be: asds dfaa aabb aaabb
  constructor() {
  }

  bruteForceApproach(arr: string[]): string[] {
    console.log(arr);
    return ['1', '2'];
  }

  ngOnInit(): void {
    this.inputLines = ['asdf', 'fdas', 'asds', 'd fm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];
    this.result = this.bruteForceApproach(this.inputLines);
  }

}
