import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Link from "next/link"

export default async function Detail(props){

    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    return (
        <div>
            <h4>상세페이지</h4>
            <p>{ result.title }</p>
            <p>{ result.content }</p>
        </div>
    )
}