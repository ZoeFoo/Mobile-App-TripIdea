import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    logger = new Logger('HTTP');
    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(req.method, req.baseUrl, req.body)

        next();
    }
}