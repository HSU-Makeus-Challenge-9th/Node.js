import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { findByEmail } from '../../repositories/auth.repository.js';
import { SocialRegisterService } from '../../services/auth.service.js';
import { Provider } from "@prisma/client";

export const googleStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/v1/auth/google/callback', 
    scope: ['email', 'profile']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const snsId = profile.id;
        const email = profile.emails[0].value;
        const name = profile.displayName;

        let user = await findByEmail(email);

        if (!user) {
            user = await SocialRegisterService(
                email,
                name,
                snsId,
                Provider.google  
            );
        } else {
            user = await updateUserInfo(user.id,{
                name: name,
                snsId: snsId,
            })
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
});