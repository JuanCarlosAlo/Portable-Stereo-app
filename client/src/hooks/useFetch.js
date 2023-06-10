import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchData = async (fetchInfo, setFetchStatus, signal, navigate) => {
	if (!fetchInfo) return;

	const { url, options, navigateTo } = fetchInfo;
	console.log(url);
	try {
		const response = await fetch(url, options, signal);
		const data = await response.json();
		setFetchStatus({ data, loading: false, error: undefined });

		if (navigateTo) navigate(navigateTo);
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, error: err });
	}
};

export const useFetch = initialFetch => {
	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});
	const [fetchInfo, setFetchInfo] = useState(initialFetch);

	const navigate = useNavigate();
	useEffect(() => {
		const controller = new AbortController();
		fetchData(fetchInfo, setFetchStatus, controller.signal, navigate);
		return () => controller.abort();
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
