import type { PageContentPayload, PageErrorPayload } from 'src/misc/payload'

export enum PageState {
  NotLoaded = 'NOT_LOADED',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}

interface PageNotLoaded {
  type: PageState.NotLoaded
}

interface PageLoading {
  type: PageState.Loading
}

interface PageContent extends PageContentPayload {
  type: PageState.Success
}

interface PageError extends PageErrorPayload {
  type: PageState.Error
}

// main page state
export type Page = PageNotLoaded | PageLoading | PageContent | PageError
