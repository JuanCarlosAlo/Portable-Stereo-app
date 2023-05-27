import { useCallback, useRef } from 'react';
import { useAudioPosition } from 'react-use-audio-player';

import { StyledBar, StyledContainerBar, StyledSlideBar } from './styles';

const PlayerPlaybar = () => {
	const { percentComplete, duration, seek, playing } = useAudioPosition({
		highRefreshRate: true
	});

	const seekBarElem = useRef(null);
	const goTo = useCallback(
		event => {
			const { pageX: eventOffsetX } = event;

			if (seekBarElem.current) {
				const elementOffsetX = seekBarElem.current.offsetLeft;
				const elementWidth = seekBarElem.current.clientWidth;
				const percent = (eventOffsetX - elementOffsetX) / elementWidth;
				seek(percent * duration);
			}
		},
		[duration, playing, seek]
	);

	return (
		<>
			<StyledContainerBar onClick={goTo} ref={seekBarElem}>
				<StyledBar percentComplete={percentComplete} />
				<StyledSlideBar percentComplete={percentComplete}></StyledSlideBar>
			</StyledContainerBar>
		</>
	);
};

export default PlayerPlaybar;
