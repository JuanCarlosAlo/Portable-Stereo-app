const BASE = 'http://localhost:3000/portable-stereo/';

export const USERS_URLS = {
	ALL: BASE + 'users/',
	POST: BASE + 'users/create-user',
	PATCH: BASE + 'users/',
	RECENTLYPLAYED_UPDATE: BASE + 'users/recently-played/',
	USER_DATA: BASE + 'users/user-data/',
	MIXTAPES: BASE + 'users/mixtapes/',
	LIKES_UPDATE: BASE + 'users/like/',
	FOLLOWS_UPDATE: BASE + 'users/follow/',
	POST_MIXTAPE: BASE + 'users/create-mixtape/',
	DELETE_MIXTAPE: BASE + 'users/delete-mixtape/'
};

export const SONGS_URLS = {
	ALL: BASE + 'songs/',
	POST: BASE + 'songs/new-song',
	PATCH: BASE + 'songs/',
	EVERYTHING: BASE + 'songs/everything',
	ARTIST: BASE + 'songs/artist/',
	SEARCH: BASE + 'songs/get-search',
	REPLAYS_UPDATE: BASE + 'songs/replays'
};
