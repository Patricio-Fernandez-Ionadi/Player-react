// state handler
export const turnBooleanState = (state, updater) => updater(!state)

// track utils
export const getTrackDuration = (audio) => {
  const durationInSecs = Math.round(audio?.duration)
  const mins = Math.floor(durationInSecs / 60)
  let secsRest = durationInSecs % 60
  secsRest.toString().length < 2 ? (secsRest = `0${secsRest}`) : secsRest
  return `${mins}:${secsRest}`
}
export const defaultVolume = '1' // number from 0 to 1

export const playTrack = (audio) => audio?.play()
export const pauseTrack = (audio) => audio?.pause()
