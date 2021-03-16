import { HttpClientModule } from '@angular/common/http';
import { PipeTransform } from '@angular/core';
import { Component, Pipe } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';

import { ShipDefinitivoComponent } from './ship-definitivo.component';

describe('ShipDefinitivoComponent', () => {
  let component: ShipDefinitivoComponent;
  let fixture: ComponentFixture<ShipDefinitivoComponent>;


  @Component({
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>'
  })
  class MockPaginationControls { }
  @Pipe({ name: 'paginate' })
  class MockPipe implements PipeTransform {
    transform(value: number): number {
      //Do stuff here, if you want
      return value;
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipDefinitivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ShipDefinitivoComponent, MockPaginationControls, MockPipe]
    })
      .compileComponents();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
