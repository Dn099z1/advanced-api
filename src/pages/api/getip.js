export default function hadler(req, res) {
    console.log(req.headers)
    const ip = req.headers['real-ip'] || req.connection.remoteAddress;
    res.status(200).json({ip: ip})
}