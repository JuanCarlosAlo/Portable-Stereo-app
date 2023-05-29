const BASE = 'http://localhost:3000/portable-stereo/';

export const USERS_URLS = {
	ALL: BASE + 'users/',
	POST: BASE + 'users/create-user',
	PATCH: BASE + 'users/',
	RECENTLYPLAYED_UPDATE: BASE + 'users/recently-played/'
};

export const SONGS_URLS = {
	ALL: BASE + 'songs/',
	POST: BASE + 'songs/new-song',
	PATCH: BASE + 'songs/',
	EVERYTHING: BASE + 'songs/everything',
	ARTIST: BASE + 'songs/artist/'
};
