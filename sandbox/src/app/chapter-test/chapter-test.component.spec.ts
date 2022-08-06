import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChapterTestComponent} from './chapter-test.component';
import {Chapter} from "./chapter";
import {Status} from "./status";

describe('ChapterTestComponent', () => {
  let component: ChapterTestComponent;
  let fixture: ComponentFixture<ChapterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should find the first required and invalid chapter', () => {
    const chapters: Chapter[]= [
      {name: 'Chapter 1', required: true, status: Status.VALID},
      {name: 'Chapter 2', required: true, status: Status.INVALID},
      {name: 'Chapter 3', required: false, status: Status.INVALID},
      {name: 'Chapter 4', required: false, status: Status.VALID}
    ];
    let firstChapter = component.findFirstChapterThatIsRequiredAndInvalid(chapters);
    expect(firstChapter.name).toEqual('Chapter 2');
    expect(firstChapter.required).toEqual(true);
    expect(firstChapter.status).toEqual(Status.INVALID);
    console.log("firstChapter ", firstChapter);
  });

  it('it should not find any result as required and invalid chapter', () => {
    const chapters: Chapter[]= [
      {name: 'Chapter 1', required: true, status: Status.VALID},
      {name: 'Chapter 2', required: false, status: Status.INVALID},
      {name: 'Chapter 3', required: false, status: Status.VALID}
    ];
    let result = component.findFirstChapterThatIsRequiredAndInvalid(chapters);
    expect(result).toEqual(undefined);
    console.log("undefined ", result);
  });
});
