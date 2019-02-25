import React, { Suspense } from "react"
import useFetch from "fetch-suspense"

// This fetching component will be delayed by
//   Suspense until the fetch request resolves.
// The return value of useFetch will be the response of the server.
const MyFetchingComponent = ({ search = "dinosaur" }) => {
  const WIKI = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${search}&format=json`

  const data = useFetch(WIKI, { method: "GET" })

  return "The server responded with: " + data
}

// The App component wraps the asynchronous fetching component in Suspense.
// The fallback component (loading text) is
//   displayed until the fetch request resolves.
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <MyFetchingComponent />
    </Suspense>
  )
}

export default App
