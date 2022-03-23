import axios from 'axios'

export default async function handler(req, res) {
  console.log(req.data)
  try {
    const response = await axios({
      url: 'http://localhost:5000/api/todos/' + req.query.id,
      method: req.method,
      data: req.body,
      params: req.params,
    })
    res.status(200).json({ todos: response.data })
  } catch (error) {
    res.status(500).json(error)
  }
}
