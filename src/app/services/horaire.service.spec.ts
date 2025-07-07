import { TestBed } from '@angular/core/testing';
import { HoraireService } from './horaire.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HoraireService', () => {
  let service: HoraireService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HoraireService]
    });

    service = TestBed.inject(HoraireService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('devrait récupérer les horaires par lieu', () => {
    const lieu = 'Route Djerba';
    const horairesMock = [
      { horaire: '08:00 - 10:00' },
      { horaire: '14:00 - 16:00' }
    ];

    service.getHorairesByLieu(lieu).subscribe(horaires => {
      expect(horaires.length).toBe(2);
      expect(horaires).toEqual(horairesMock);
    });

    const req = httpMock.expectOne(`http://192.168.1.87:8000/api/horaires/`);
    expect(req.request.method).toBe('GET');
    req.flush(horairesMock);
  });
});
