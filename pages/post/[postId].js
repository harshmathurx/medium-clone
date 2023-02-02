import { doc, getDoc } from "firebase/firestore"
import Head from "next/head"
import { useRouter } from "next/router"
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
    const router = useRouter();
    const postId = router.query.postId;
    return <div className={styles.content}>
        <Head>
            <title>{post?.title} by {author?.name}</title>
            <meta name="description" content={post?.brief} />
            <meta property="og:title" content={`${post?.title} by ${author?.name}`} />
            <meta property="og:description" ontent={post?.brief} />
            <meta property="og:url" content={`https://medium-clone-harsh.vercel.app/${postId}`} />
            <meta property="og:type" content="website" />
        </Head>
        <ReadersNav />
        <ArticleMain post={post} author={author} />
        <Reccomendations />
    </div>
}
export default Post