import { Strategy , ExtractJwt } from 'passport-jwt';
import { findByUserId } from '../../repositories/user.repository.js';
import passport from 'passport';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET, 
    ignoreExpiration: false, 
};

export const jwtStrategy = new Strategy(opts, async (jwt_payload, done) => {
    try {
        const user = await findByUserId(jwt_payload.userId);

        if (user) {
            return done(null, user); 
        } else {
            return done(null, false); 
        }
    } catch (error) {
        return done(error, false);
    }
});

export const jwtAuthenticate = passport.authenticate('jwt', { session: false });