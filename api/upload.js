import { put } from '@vercel/blob';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        const filename = req.headers['x-filename'];

        const chunks = [];

        for await (const chunk of req) {
            chunks.push(chunk);
        }

        const buffer = Buffer.concat(chunks);

        const blob = await put(
            filename,
            buffer,
            {
                access: 'public',
                contentType: req.headers['content-type'],
            }
        );

        return res.status(200).json({
            message: 'Upload successful',
            url: blob.url
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Upload failed'
        });
    }
}