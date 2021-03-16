//this will short the UR
//Logics

module.exports = {
    shortUrl: async(req, res) => {
        try {
            let { url } = req.body;
            console.log(url);
        } catch (error) {
            return res.status(500).json({
                error: "Could not generate Url"
            })
        }
    }
}