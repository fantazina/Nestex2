import { connectDB } from "@/util/database"
import Link from "next/link"

export default async function List(){

    const db = (await connectDB).db('forum')
    let result = await db.collection('post').find().toArray()
    console.log(result)

    
    return (
        <div className="list-bg">
            {
                result.map((a, i) => { 
                    return (
                        <div className="list-item" key={i}>
                            <Link href={ '/detail/' + result[i]._id }>
                                <h4>{ result[i].title }</h4>
                            </Link>
                            <p>1월 1일</p>
                        </div>
                    )
                })
            }
            {/* <div className="list-item">
                <h4>{ result[0].title }</h4>
                <p>1월 1일</p>
            </div>

            <div className="list-item">
                <h4>{ result[1].title }</h4>
                <p>1월 1일</p>
            </div> */}
        </div>
    )
}