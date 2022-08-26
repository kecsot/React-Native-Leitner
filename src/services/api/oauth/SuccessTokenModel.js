export default class SuccessTokenModel {
    requested_at;
    expired_after;
    expires_in;
    access_token;
    refresh_token;

    constructor(requested_at,
                expired_after,
                expires_in,
                access_token,
                refresh_token) {
        this.requested_at = requested_at;
        this.expired_after = expired_after;
        this.expires_in = expires_in;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }
}