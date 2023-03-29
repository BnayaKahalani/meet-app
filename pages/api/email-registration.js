import path from 'path'
import fs from 'fs'
import AllMeetups from '@/src/components/meetups/meetups-page'

function bulidPath() {
  return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export default function handler(req, res) {
  const { method } = req

  const filePath = bulidPath()
  const { meetups_categories, allMeetups } = extractData(filePath)

  if (!AllMeetups) {
    return res.status(404).json({
      status: 404,
      message: 'Meetups data not found'
    })
  }

  if (method === "POST") {
    const { email, meetupId } = req.body

    if (!email | !email.include('@')) {
      res.status(422).json({ message: 'Invalid email address' })
      return
    }

    const newAllMeetups = allMeetups.map(m => {
      if (m.id === meetupId) {
        if (m.emails_registered.includes(email)) {
          res.status(201).json({ message: 'This email has already been registered' })
        }
        return {
          ...m, emails_registered: [...m.emails_registered, email]
        }
      }
      return m
    })

    fs.writeFileSync(filePath, JSON.stringify({ meetups_categories, allMeetups: newAllMeetups }))

    res.status(200).json({ message: `You have been successfully registered with the email: ${email}` })

  }
}