import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Library } from './library';
import { ImageRetrieval } from '../../interfaces/image-retrieval';
import { DataService } from '../../services/data.service';

const mockImage: ImageRetrieval = {
  originalUrl: 'https://fastly.picsum.photos/id/570/500/600.jpg?hmac=zeDMLGuOKTxcSMVaPOHuIXPgrKMPNy0x1epPDS6BCqY',
  hmac: 'zeDMLGuOKTxcSMVaPOHuIXPgrKMPNy0x1epPDS6BCqY'
}

/**
 * Provide a mock DataService
 */
class MockDataService {
  retrieveImage(): Promise<ImageRetrieval> {
    return new Promise((resolve) => {
      resolve(mockImage);
    });
  }
}

describe('Library', () => {
  let component: Library;
  let fixture: ComponentFixture<Library>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Library],
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Library);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    await fixture.whenStable();
  });

  it('should retrieve image', async () => {
    await component.retrieveImages(1);
    tick();
    expect(component.imagesList()).toEqual([
      mockImage
    ])
  });
});
