import { ActionReducerMap } from "@ngrx/store";
import * as fromSongs from './songs.reducer';

export const featureName = 'musicFeature'

export interface MusicState {
  songs: fromSongs.SongState
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer
}
