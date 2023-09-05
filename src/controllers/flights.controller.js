export async function registerFlight(req, res) {
    try {
      await //função
      res.status(200).send("registerFlight")
    } catch (error) {
      console.log(error)
      return res.sendStatus(500)
    }
}

export async function showFlights(req, res) {
    try {
      await //função
      res.status(200).send("showFlights")
    } catch (error) {
      console.log(error)
      return res.sendStatus(500)
    }
}