import React from 'react'

import './App.css'

import { Page, PageState } from 'src/misc/state'
import { useContent } from 'src/selectors/useContent'
import { pageReducer } from 'src/reducers/pageReducer'
import { useClickHandler } from './hooks/useClickHandler'

const initialState: Page = { type: PageState.NotLoaded }

interface AppProps {}

export function App({}: AppProps) {
  const [state, dispatch] = React.useReducer(pageReducer, initialState)

  const { title, body } = useContent(state)

  const handleClick = () => {
    useClickHandler(dispatch)
  }

  return (
    <div className="App">
      <header>
        <button
          onClick={handleClick}
          disabled={state.type === PageState.Loading}
        >
          Load data
        </button>
      </header>

      <main className="App-main">
        <h3>{title}</h3>
        <p>{body}</p>
      </main>
    </div>
  )
}
