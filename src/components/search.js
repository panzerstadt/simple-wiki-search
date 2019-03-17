import React, { useState, useEffect } from "react"
import useFetch from "fetch-suspense"
import axios from "axios"

//import {Suspense} from "react"

import styles from "./search.module.css"

const SHORT_SIZE = 16
const LONG_SIZE = 12

const FetchData = ({ search = "dinosaur", onResult }) => {
  const [loading, setLoading] = useState(false)

  const WIKI = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${search}&format=json`

  useEffect(() => {
    setLoading(true)
    axios.get(WIKI).then(data => {
      console.log(data)
      if (onResult) onResult(data.data)
    })
  }, [search])

  return <div />
}

// can't be used because Suspense is not out yet
const SuspenseFetchData = ({ search = "dinosaur", onResult }) => {
  const [result, setResult] = useState("")

  const WIKI = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${search}&format=json`
  const r = useFetch(WIKI, { method: "GET" })

  if (onResult) onResult(r && r.length ? r : [])

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
      <tr key={"tr-" + l} style={{ height: 100 }}>
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
                <p
                  style={{
                    minWidth: 200,
                    maxHeight: 200,
                    overflowY: "scroll",
                  }}
                >
                  {v}
                </p>
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
      {/* suspense is too damn new, so it's not supported officially yet
      <Suspense fallback="fetching data...">
        <FetchData search={search} onResult={setR} />
      </Suspense> */}
      <FetchData search={search} onResult={setR} />
      <br />
      <h3>{header}</h3>
      <div style={{ width: "100%", overflow: "scroll" }}>
        <table>{dataRows}</table>
      </div>
    </div>
  )
}

export default SearchBar
