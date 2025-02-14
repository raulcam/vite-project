import { ThemeProvider } from "styled-components";
import { base, light } from "./themes";

const Theme = ({ children }) => {

    const theme = { ...base, color: light }

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;