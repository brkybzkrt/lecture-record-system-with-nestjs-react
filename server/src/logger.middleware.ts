import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');
 
  use(request: Request, response: Response, next: NextFunction) {
    response.on('finish', () => {
      const { method, originalUrl, params, body, hostname, headers} = request;
      const { statusCode, statusMessage } = response;
      
      const message = `time: ${new Date()} method: ${method} originalUrl: ${originalUrl} statusCode: ${statusCode} statusMessage: ${statusMessage}  params: ${JSON.stringify(params)} body: ${JSON.stringify(body)} `;
 
      if (statusCode >= 400) {
        return this.logger.error(message);
      }
 
      // if (statusCode >= 400) {
      //   return this.logger.warn(message);
      // }
 
      return this.logger.log(message);
    });
 
    next();
  }
}
