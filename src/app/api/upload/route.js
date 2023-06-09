import { connectToDB } from "../../../utils/database";
import Image from "../../../models/Image";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectToDB();

    try {
        const { imageUrl } = await request.json();

        // Create a new image document and save it to the database
        const image = await new Image({ imageUrl });
        image.save();

        return NextResponse.json({ id: image._id }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Image upload failed." }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDB();
        const images = await Image.find();
        return NextResponse.json(images, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch images." }, { status: 500 });
    }
}
