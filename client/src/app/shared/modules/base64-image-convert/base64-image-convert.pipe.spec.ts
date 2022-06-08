import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64ImageConvertPipe } from './base64-image-convert.pipe';

describe('Base64ImageConvertPipe', () => {

  let pipe: Base64ImageConvertPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue:{
            sanitize: () => 'safeString',
            bypassSecurityTrustResourceUrl: (val: string) => val
        }

        }
      ]
    });
    const service: DomSanitizer =
    TestBed.get(DomSanitizer);
    pipe = new Base64ImageConvertPipe(service)
    });

  it(' should make base64  url', () => {
    const url = pipe.transform('hello')
    expect(url).toEqual('data:image/jpeg;charset=utf-8;base64,hello');
  });

  it(' should make base64  url', () => {
    const url = pipe.transform('')
    expect(url).toEqual('data:image/jpeg;charset=utf-8;base64,');
  });
  it(' should make base64  url', () => {
    const url = pipe.transform('a')
    expect(url).toEqual('data:image/jpeg;charset=utf-8;base64,a');
  });
});
