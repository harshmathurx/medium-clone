import { useRouter } from "next/router"

import ArticleMain from "../../components/ArticleMain"
import ReadersNav from "../../components/ReadersNav"
import Reccomendations from "../../components/Reccomendations"


const styles = {
    content: `flex`,
}

const Post = () => {
    const router = useRouter()

    return (
        <div className={styles.content}>
            <ReadersNav />
            <ArticleMain postId={router.query.postId} />
            <Reccomendations /> 
        </div>
    )
}
export default Post