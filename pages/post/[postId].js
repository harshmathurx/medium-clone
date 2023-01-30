import ArticleMain from "../../components/ArticleMain"
import ReadersNav from "../../components/ReadersNav"
import Reccomendations from "../../components/Reccomendations"

const styles = {
    content: `flex`,
}

const Post = () => {
  return (
    <div className={styles.content}>
        <ReadersNav/>
        <ArticleMain/>
        <Reccomendations/>
    </div>
  )
}
export default Post