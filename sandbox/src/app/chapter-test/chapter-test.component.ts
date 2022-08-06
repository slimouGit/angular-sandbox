import {Component, OnInit} from '@angular/core';
import {Chapter} from "./chapter";
import {Status} from "./status";

@Component({
  selector: 'app-chapter-test',
  templateUrl: './chapter-test.component.html',
  styleUrls: ['./chapter-test.component.css']
})
export class ChapterTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  findFirstChapterThatIsRequiredAndInvalid(chapters: Chapter[]) {
    return chapters.find(c => c.required === true && c.status === Status.INVALID);
  }
}
