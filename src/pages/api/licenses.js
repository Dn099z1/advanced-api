export default function hadler(req, res) {
    res.status(200).json([
        {id: 1, name: AdvancedNetWork, pass:123 },
        {id: 2, name: AdvancedNetWork2, pass:1234 }
    ])
}
