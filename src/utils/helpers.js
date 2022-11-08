// state handler
export const turnBooleanState = (state, updater) => updater(!state)

// track utils

// recives an audio element and returns as string the duration ('mins:secs')
export const getTrackDuration = (audio, times = 0) => {
  times++
  if (audio) {
    const durationInSecs = Number(Math.round(audio.duration))
    const mins = Number(Math.floor(durationInSecs / 60))
    const secsRest = Number(durationInSecs % 60)
    return { status: 200, timer: [mins, secsRest], secs: durationInSecs }
  }
  return { status: 404, timer: [undefined, undefined], secs: undefined }
}

// starts the track after 1 sec
export const continuePlaying = (audio) =>
  setTimeout(() => {
    playTrack(audio)
  }, 1000)

// maybe these are useless functions but i made it to be sure that are making just one thing
export const playTrack = (audio) => audio?.play()
export const pauseTrack = (audio) => audio?.pause()

// recives a percent value (0 to 100) and a total value to obtain the result
export const getPercent = (value, from) => {
  return (value * from) / 100
}

export const showTopPage = () => window.scrollTo(0, 0)
