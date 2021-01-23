import { assertNever } from 'src/utils'
import { Page, PageState } from 'src/misc/state'

export function useContent(state: Page) {
  switch (state.type) {
    case PageState.NotLoaded: {
      return { title: '(Not Loaded)', body: '(Click the load button)' }
    }

    case PageState.Loading: {
      return { title: 'Loading...', body: 'Loading...' }
    }

    case PageState.Success: {
      return { title: state.head, body: state.body }
    }

    case PageState.Error: {
      return {
        title: 'Error!',
        body: `code: ${state.code}, title: ${state.title}, detail: ${state.detail}`,
      }
    }

    default: {
      return assertNever(state)
    }
  }
}
