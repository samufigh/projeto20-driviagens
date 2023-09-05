export async function registerPassenger(req, res) {
  try {
    await //função
    res.status(200).send("registerPassenger")
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function showPassengerTravels(req, res) {
    try {
      await //função
      res.status(200).send("showPassenger")
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
}