import { assertNever } from 'src/utils'
import { Page, PageState } from 'src/misc/state'
import type { PageContentPayload, PageErrorPayload } from 'src/misc/payload'

export enum ActionType {
  ButtonClick = 'BUTTON_CLICK',
  LoadSuccess = 'LOAD_SUCCESS',
  LoadFail = 'LOAD_FAIL',
}

export type Action =
  | { type: ActionType.ButtonClick }
  | { type: ActionType.LoadSuccess; payload: PageContentPayload }
  | { type: ActionType.LoadFail; payload: PageErrorPayload }

type Reducer = (state: Page, action: Action) => Page

export const pageReducer: Reducer = (_state: Page, action: Action) => {
  switch (action.type) {
    case ActionType.ButtonClick: {
      return { type: PageState.Loading }
    }

    case ActionType.LoadSuccess: {
      return {
        type: PageState.Success,
        head: action.payload.head,
        body: action.payload.body,
      }
    }

    case ActionType.LoadFail: {
      return {
        type: PageState.Error,
        code: action.payload.code,
        title: action.payload.title,
        detail: action.payload.detail,
      }
    }

    default: {
      return assertNever(action)
    }
  }
}
