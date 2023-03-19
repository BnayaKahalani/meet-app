import path from 'path'
import fs from 'fs'

function bulidPath() {
  return path.join(process.cwd, 'data', 'data.json')
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export default function handler(req, res) {
  const { method } = req

  const filePath = bulidPath()
  const { meetups_categories, all_meetups } = extractData(filePath)


  if (method === "POST") {
    const { email, meetupId } = req.body

    res.status(200).json({ message: `You have benn successfully registered with the email: ${email}` })

  }
}