export async function registerCity(req, res) {
    try {
      //await //função
      res.status(200).send("cities")
    } catch (error) {
      console.log(error)
      return res.sendStatus(500)
    }
  }