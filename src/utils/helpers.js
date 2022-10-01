// state handler
export const turnBooleanState = (state, updater) => updater(!state)

// track utils

// recives an audio element and returns as string the duration ('mins:secs')
export const getTrackDuration = (audio) => {
  const durationInSecs = Math.round(audio?.duration)
  const mins = Math.floor(durationInSecs / 60)
  const secsRest = durationInSecs % 60
  return { timer: [mins, secsRest], secs: durationInSecs }
}

// starts the track after 1 sec
export const continuePlaying = (audio) =>
  setTimeout(() => {
    playTrack(audio)
  }, 1000)

// maybe these are useless functions but i made it to be sure that are making just one thing
export const playTrack = (audio) => audio?.play()
export const pauseTrack = (audio) => audio?.pause()
