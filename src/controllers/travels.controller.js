export async function registerTravel(req, res) {
    try {
      await //função
      res.status(200).send("registerTravel")
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
}