const controller = {
  home: (req, res) => {
    res.send('/ is working')
  },
  signup: async (req, res) => {
  
    const { firstname, lastname, email, password } = req.body;
    res.send(
      `${firstname} ${
        lastname
      } ${email} ${
        password
      }`
    )
  console.log('/api/signup is working');
},
}
module.exports.controller = controller