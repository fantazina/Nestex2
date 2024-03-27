export default function Write(){

    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목임" />
                <input name="content" placeholder="글내용임" />
                <button type="submit">버튼임</button>
            </form>
        </div>
    )
}