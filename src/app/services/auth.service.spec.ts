import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AuthService]  
    });
    service = TestBed.inject(AuthService);  // Injection du service AuthService
    httpMock = TestBed.inject(HttpTestingController);  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  
  });

  // Test  méthode userLogin
  it('should call userLogin and return data', () => {
    const mockResponse = { success: true, token: 'fake-jwt-token' };
    const requestPayload = { username: 'test', password: 'password123' };

    service.userLogin(requestPayload).subscribe(response => {
      expect(response).toEqual(mockResponse);  
    });

    
    const req = httpMock.expectOne(`${environment.API_URL}/login/`);
    expect(req.request.method).toBe('POST');  
    req.flush(mockResponse);  
  });

  // Test  méthode userRegister
  it('should call userRegister and return data', () => {
    const mockResponse = { success: true, message: 'User registered successfully' };
    const requestPayload = { username: 'test', password: 'password123', email: 'test@example.com' };

    service.userRegister(requestPayload).subscribe(response => {
      expect(response).toEqual(mockResponse);  // Vérifie la réponse retournée par le service
    });

    
    const req = httpMock.expectOne(`${environment.API_URL}/register/`);
    expect(req.request.method).toBe('POST');  
    req.flush(mockResponse);  
  });

  // Vérifie qu'aucune requête HTTP n'est restée en attente
  afterEach(() => {
    httpMock.verify();
  });
});
