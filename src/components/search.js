import React, { useState, Suspense, useEffect } from "react"
import useFetch from "fetch-suspense"

import styles from "./search.module.css"

const SHORT_SIZE = 16
const LONG_SIZE = 12

const FetchData = ({ search = "dinosaur", onResult }) => {
  const [result, setResult] = useState("")

  const WIKI = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${search}&format=json`
  const r = useFetch(WIKI, { method: "GET" })

  if (onResult) onResult(r)

  return <div />
}

const SearchBar = () => {
  const [search, setSearch] = useState("default")
  const [run, toggleRun] = useState(false)
  const [r, setR] = useState([])

  let header = ""
  let rows = {}

  r.forEach((v, i) => {
    if (i === 0) {
      header = `you searched for: ${v}`
    } else {
      v.map((w, j) => {
        if (!rows[j]) rows[j] = []

        rows[j].push(w)
      })
    }
  })

  const dataRows = Object.keys(rows).map((_, l) => {
    const data = rows[l]
    return (
      <tr key={"tr-" + l}>
        {data.map((v, i) => {
          if (!v.search("http")) {
            return (
              <td key={"td-" + i} style={{ fontSize: SHORT_SIZE }}>
                <a key={"td-" + i} href={v} target="_blank">
                  {v}{" "}
                </a>
              </td>
            )
          } else {
            return (
              <td
                key={"td-" + i}
                style={{
                  fontSize: v.length > 100 ? LONG_SIZE : SHORT_SIZE,
                  lineHeight: 1.2,
                }}
              >
                {v}
              </td>
            )
          }
        })}
      </tr>
    )
  })

  return (
    <div>
      <input
        className={styles.search}
        onChange={v => {
          setSearch(v.target.value || "default")
        }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            toggleRun(!run)
          }
        }}
        placeholder="wikipedia search"
      />
      <br />
      <Suspense fallback="fetching data...">
        <FetchData search={search} onResult={setR} />
      </Suspense>
      <br />
      <h3>{header}</h3>
      <table>{dataRows}</table>
    </div>
  )
}

export default SearchBar
