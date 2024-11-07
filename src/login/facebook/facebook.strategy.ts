import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';

export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: '980884506772188',
      clientSecret: 'ec4f8e5bbee99e03eea3afeb4415bcc5',
      callbackURL: 'http://localhost:3000/login/facebook/redirect',
      // scope for facebook post
      profileFields: ['emails', 'name'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: Function,
  ) {
    const { emails, name } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
    };
    done(null, user);
  }
}
