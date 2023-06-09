import { NextResponse } from "next/server";
import SchemaDraft from "../../../../models/draft";
import { connectToDB } from "../../../../utils/database";

export async function POST(request) {

    await connectToDB();
    const data = await request.json();
    const { usr_id, content, settings } = data;
    const { title, description, body, category, tags } = content;
    const { link, img_url } = settings;

    // if (
    //     !usr_id ||
    //     !content ||
    //     !settings ||
    //     !title ||
    //     !description ||
    //     !body ||
    //     !category ||
    //     !tags ||
    //     !link ||
    //     !img_url
    // )
    //     return new NextResponse("Data sent incomplete.", { status: 404 });

    try {
        // send data to the

        // terminal dekh chal gaya per error agaya woi wala :(
        // console.log("connected !!😀"); hata dia cuz well uh har bar lo
        const blogPost = await SchemaDraft.create({
            usr_id: usr_id,
            content: {
                title: title,
                description: description,
                body: body,
                category: category,
                tags: tags,
            },
            settings: { link: link, img_url: img_url },
        });
        const { _id } = blogPost; // Get the generated _id
        blogPost.save();
        return NextResponse.json({ message: "Data stored successfully", ID: _id }, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Error occured when creating data", { status: 400 });
    }
}

export async function PUT(request) {
    await connectToDB();
    const data = await request.json();
    const { draftId, content } = data;
    const { title, body } = content;

    if (!draftId || !content) {
        return new NextResponse("Data sent incomplete.", { status: 404 });
    }

    try {
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




export function GET() {
    return new NextResponse("meow");
}
