import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { expressJwtSecret} from 'jwks-rsa'; 
import { promisify } from 'util'; 
const {expressjwt} = require('express-jwt');

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTHO_AUDIENCE: string; 
  private AUTHO_DOMAIN: string;

  constructor (private configService: ConfigService){
    this.AUTHO_AUDIENCE = this.configService.get('AUDIENCE');
    this.AUTHO_DOMAIN = this.configService.get('DOMAIN');
  }

  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {
    const req = context.getArgByIndex(0); 
    const res = context.getArgByIndex(1);
    
    const checkJwt = promisify(expressjwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit:true,
        jwksRequestsPerMinute:5,
        jwksUri: `${this.AUTHO_DOMAIN}.well-known/jwks.json`,
      }),
      audience: this.AUTHO_AUDIENCE,
    issuer:this.AUTHO_DOMAIN,
      algorithms:['RS256']
    }),); 
    
    try {
      await checkJwt(req, res);
      return true;
    } catch (error) {
      throw new UnauthorizedException(error); 
    }
    
  }
}
