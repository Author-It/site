import SchemaDraft from "../../../../../models/draft"
import { connectToDB } from "../../../../../utils/database";
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
    const id = params.id;

    try {
        await connectToDB();

        const find = await SchemaDraft.findById(id);

        if (find) {
            await SchemaDraft.findByIdAndDelete(id)
            return NextResponse.json({message: "Draft deleted successfully!"}, { status: 200 })
        } else {
            return new NextResponse("Record not found.", { status: 404 })
        }
    } catch (error) {
        console.log(error);
        return new NextResponse("An error occured parsing data", { status: 400 })
    }
}

export async function PUT(request, { params }) {
    const draftId = params.id;

    
    const data = await request.json();
    const { content } = data;
    const { title, body } = content;

    if (!draftId || !content) {
        return new NextResponse("Data sent incomplete.", { status: 404 });
    }

    try {
        await connectToDB();
        const updatedDraft = await SchemaDraft.findByIdAndUpdate(
            draftId,
            {
                $set: {
                    "content.title": title,
                    "content.body": body,
                },
            },
            { new: false }
        );

        if (!updatedDraft) {
            return new NextResponse("Draft not found.", { status: 404 });
        }

        return new NextResponse("Data updated successfully.", { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Error occurred when updating data.", { status: 400 });
    }
}

export async function GET() {
    return new NextResponse("meow")
}