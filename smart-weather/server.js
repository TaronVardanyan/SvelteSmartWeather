app.get("/logs/clean", async (req, res) => {
    try {
        let d = new Date();
        let currentYear = d.getFullYear();
        let today = new Date(`${currentYear}-01-01`);

        let total_records_to_delete = await req.db
            .collection("logs")
            .find({
                date: {
                    $lt: today
                }
            })
            .count();

        const removedResult = await req.db.collection("logs").deleteMany({
            date: { $lt: new Date(today) }
        });

        res.status(200).send({
            message: `There are ${total_records_to_delete} to delete`,
            result: removedResult
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});