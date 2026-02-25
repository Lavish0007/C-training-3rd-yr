import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import os from 'os'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/api/memory/total', (req, res) => {
  try {
    const total = os.totalmem()
    res.json({ total })
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.get('/api/memory/free', (req, res) => {
  try {
    const free = os.freemem()
    res.json({ free })
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.post('/api/file/create', async (req, res) => {
  try {
    const { filename = 'sample.txt', content = 'Hello from server' } = req.body || {}
    const filePath = path.join(process.cwd(), filename)
    await fs.writeFile(filePath, content, 'utf8')
    res.json({ ok: true, path: filePath })
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.post('/api/file/copy', async (req, res) => {
  try {
    const { src = 'sample.txt', dest = 'sample-copy.txt' } = req.body || {}
    const srcPath = path.join(process.cwd(), src)
    const destPath = path.join(process.cwd(), dest)
    await fs.copyFile(srcPath, destPath)
    res.json({ ok: true, from: srcPath, to: destPath })
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`)
})
