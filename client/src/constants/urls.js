const BASE = 'http://localhost:3000/portable-stereo/';

export const USERS_URLS = {
	ALL: BASE + 'users/',
	POST: BASE + 'users/create-user',
	PATCH: BASE + 'users/'
};

export const SONGS_URLS = {
	ALL: BASE + 'songs/',
	POST: BASE + 'songs/create-song',
	PATCH: BASE + 'songs/'
};
