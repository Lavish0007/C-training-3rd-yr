import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api'

function App() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleTotal() {
    setLoading(true)
    setMessage('')
    try {
      const res = await axios.get(`${API_BASE}/memory/total`)
      setMessage(`Total memory: ${res.data.total} bytes`)
    } catch (err) {
      setMessage(String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleFree() {
    setLoading(true)
    setMessage('')
    try {
      const res = await axios.get(`${API_BASE}/memory/free`)
      setMessage(`Free memory: ${res.data.free} bytes`)
    } catch (err) {
      setMessage(String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleCreateFile() {
    setLoading(true)
    setMessage('')
    try {
      const res = await axios.post(`${API_BASE}/file/create`, {
        filename: 'sample-from-frontend.txt',
        content: 'Created by frontend via backend'
      })
      setMessage(`File created: ${res.data.path}`)
    } catch (err) {
      setMessage(String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleCopyFile() {
    setLoading(true)
    setMessage('')
    try {
      const res = await axios.post(`${API_BASE}/file/copy`, {
        src: 'sample-from-frontend.txt',
        dest: 'sample-from-frontend-copy.txt'
      })
      setMessage(`Copied from ${res.data.from} to ${res.data.to}`)
    } catch (err) {
      setMessage(String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="content">
        <h1>Node JS OS Model</h1>
        <h1>Node JS FS Model</h1>

        <div className="button-grid">
          <button className="action-btn" onClick={handleTotal} disabled={loading}>Total Memory</button>
          <button className="action-btn" onClick={handleFree} disabled={loading}>Free Memory</button>
          <button className="action-btn" onClick={handleCreateFile} disabled={loading}>Create File</button>
          <button className="action-btn" onClick={handleCopyFile} disabled={loading}>Copy File</button>
        </div>

        {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
      </main>
    </>
  )
}

export default App
