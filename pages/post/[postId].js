import { doc, getDoc } from "firebase/firestore"
import ArticleMain from "../../components/ArticleMain"
import ReadersNav from "../../components/ReadersNav"
import Reccomendations from "../../components/Reccomendations"
import { db } from "../../firebase"

const styles = {
    content: `flex`,
}

export const getServerSideProps = async (context) => {
    const postId = context.params.postId;
    let post = (await getDoc(doc(db, 'articles', postId))).data();
    let author = (await getDoc(doc(db, 'users', post?.author))).data();
    post = JSON.parse(JSON.stringify(post));
    author = JSON.parse(JSON.stringify(author));

    return {
        props: {
            post,
            author
        }
    }
}

const Post = ({ post, author }) => {
    return <div className={styles.content}>
        <ReadersNav />
        <ArticleMain post={post} author={author} />
        <Reccomendations />
    </div>
}
export default Post