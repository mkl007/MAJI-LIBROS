/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'

/**
 * -Validate token after proceed to profile,dashbaord and some routes that has verifyToken
 * @param {*} req -to require data HTTP
 * @param {*} res -To responde to cliente side by HTTP
 * @param {*} next -To proceed after completing the validation
 * @returns {token , req.userId} -sending these datas to our dashboard route.
 */

export function verifyToken (req, res, next) {
  try {
    const preToken = req.headers.cookie
    if (!preToken) {
      return res.json({ message: 'Please login brha' })
    }

    const token = preToken.split('=')[1]
    if (!token) {
      return res.status(401).json({
        message: 'No token provided :('
      })
    }
    const decoded = jwt.verify(token, process.env.JWT_PASS)
    req.userId = decoded.id
    next()
  } catch (error) {
    res.status(500).json({ msg: 'Error bro', error })
  }
}




// try {
//     const token = req.cookies.token
//     // if (!token) console.log('no token bro')
//     const decoded = jwt.verify(token, process.env.JWT_PASS)
//     const userId = decoded.id
//     const userInfo = await User.findById(userId).select('-password')
//     if (userInfo) return res.json({ userInfo })
//     return res.json({ message: 'No user found' })
//   } catch (error) {
//     if (error.name === 'TokenExpiredError') return res.json({ Message: 'Token for the verification expired. Please signup in the app!' })
//     else if (error.name === 'JsonWebTokenError') return res.json({ message: 'Please log in' })
//     console.log(error)
//     res.status(500).json({ error })
//   }