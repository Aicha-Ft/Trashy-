import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignalementService } from './signalement.service';

describe('SignalementService', () => {
  let service: SignalementService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignalementService]
    });

    service = TestBed.inject(SignalementService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'aucune requête en attente
  });

  it('devrait envoyer un signalement de problème via POST', () => {
    const dummyData = {
      selectedProblem: 'Poubelle pleine',
      selectedLocation: 'Route Tataouine',
      comment: 'Problème de poubelle pleine à cet endroit.'
    };

    service.envoyerSignalement(dummyData).subscribe(response => {
      expect(response).toBeTruthy(); // Le test réussit si on reçoit une réponse
    });

    const req = httpMock.expectOne('http://192.168.1.87:8000/api/signalement/');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dummyData);

    req.flush({ success: true }); // Simule une réponse du backend
  });
});
