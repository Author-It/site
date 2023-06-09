import SchemaDraft from "../../../../../../models/draft";
import { connectToDB } from "../../../../../../utils/database";
import { NextResponse } from 'next/server';


export async function GET(request, { params }) {
    const id = params.id;

    try {
        await connectToDB();

        const find = await SchemaDraft.findById(id);

        if (find) {
            return NextResponse.json(find, { status: 200 })
        } else {
            return new NextResponse("Data not found", { status: 404 })
        }
    } catch (error) {
        console.log(error);
        return new NextResponse("An error occured parsing data", { status: 400 })
    }
}
// res=response - req=request