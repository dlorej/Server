export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    const data = req.body;

    console.log("Received:", data);

    return res.status(200).json({
        message: "hello world",
        received: data
    });
}