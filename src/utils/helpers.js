// state handler
export const turnBooleanState = (state, updater) => updater(!state)

// track utils

// recives an audio element and returns as string the duration ('mins:secs')
export const getTrackDuration = (audio) => {
  const durationInSecs = Math.round(audio?.duration)
  const mins = Math.floor(durationInSecs / 60)
  let secsRest = durationInSecs % 60
  secsRest.toString().length < 2 ? (secsRest = `0${secsRest}`) : secsRest
  return `${mins}:${secsRest}`
}

// default value to be used in a state, i think it's irrelevant since is the default value property
export const defaultVolume = '1' // number from 0 to 1

// maybe these are useless functions but i made it to be sure that are making just one thing
export const playTrack = (audio) => audio?.play()
export const pauseTrack = (audio) => audio?.pause()
