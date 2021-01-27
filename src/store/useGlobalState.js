import { useReducer } from "react"
import {
  lightTheme as lightTheme,
  darkTheme2 as darkTheme,
} from "../components/theme/Themes"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        isDark: !state.isDark,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      }
    default:
      return state
  }
}

const useGlobalState = () => {
  const time = new Date().getHours()
  const theme = time > 7 && time < 20 ? lightTheme : darkTheme

  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
    theme: theme,
  })

  return { state, dispatch }
}

export default useGlobalState
