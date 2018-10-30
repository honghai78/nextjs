import React from "react"
import Header from "./header/index"

const App = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

export default App
