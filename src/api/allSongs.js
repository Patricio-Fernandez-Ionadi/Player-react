import { baseApiUri } from 'utils/constants'

export const getAllSongs = async () => {
  return await fetch(`${baseApiUri}/songs`).then((res) => res.json())
}
