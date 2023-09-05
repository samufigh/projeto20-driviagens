export async function showPassengerTravels(req, res) {
    try {
      await //função
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
}