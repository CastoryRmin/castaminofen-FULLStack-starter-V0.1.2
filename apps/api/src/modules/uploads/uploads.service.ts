import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
  upload() {
    return {
      accepted: true,
      message: 'Upload endpoint is ready for integration with object storage.',
      supportedTypes: ['image/png', 'image/jpeg', 'audio/mpeg', 'audio/mp3'],
    };
  }
}
