import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RemunerationService } from './remuneration.service';

describe('RemunerationService', () => {
  let service: RemunerationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemunerationService]
    });

    service = TestBed.inject(RemunerationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'aucune requête en attente
  });

  it('devrait envoyer une déclaration de rémunération via POST', () => {
    const dummyData = {
      lieu: 'Route Tataouine',
      poids: 4,
      points: 20
    };

    service.envoyerRemuneration(dummyData).subscribe(response => {
      expect(response).toBeTruthy(); 
    });

    const req = httpMock.expectOne('http://192.168.1.87:8000/api/renumerations/');

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dummyData);

    req.flush({ success: true }); 
  });
});
