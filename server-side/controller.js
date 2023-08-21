const controller = {
  home: (req, res) => {
    res.send('/ is working')
  },
  signup: async (req, res) => {
  
    const { firstName, lastName, email, password } = req.body;
    res.send(
      `${firstName} ${
        lastName
      } ${email} ${
        password
      }`
    )
  console.log('/api/signup is working');
},
}
module.exports.controller = controller