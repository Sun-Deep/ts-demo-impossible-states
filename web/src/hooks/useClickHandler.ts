import { Action, ActionType } from 'src/reducers/pageReducer'

const apiUrl = 'http://localhost:3000/data'

export async function useClickHandler(dispatch: React.Dispatch<Action>) {
  dispatch({ type: ActionType.ButtonClick })

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (response.ok) {
      dispatch({
        type: ActionType.LoadSuccess,
        payload: {
          head: data.head,
          body: data.body,
        },
      })
    } else {
      dispatch({
        type: ActionType.LoadFail,
        payload: {
          code: data.code,
          title: data.title,
          detail: data.detail,
        },
      })
    }
  } catch (error) {
    dispatch({
      type: ActionType.LoadFail,
      payload: {
        code: 999,
        title: 'Unknown Error',
        detail: 'Please try again',
      },
    })
  }
}
