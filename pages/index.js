import { collection, getDocs } from 'firebase/firestore';
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import { db } from '../firebase';

const styles = {
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
  container: `max-w-7xl flex-1`,
  main: `flex justify-center`,
  wrapper: `mx-auto`,
}

export async function getServerSideProps() {

  const querySnapshot = await getDocs(collection(db, 'articles'));
  let posts = querySnapshot.docs.map(doc => {
    return {
      id: doc.id,
      data: {
        body: doc.data().body,
        brief: doc.data().brief,
        category: doc.data().category,
        postLength: doc.data().postLength,
        bannerImage: doc.data().bannerImage,
        title: doc.data().title,
        postedOn: doc.data().postedOn,
        author: doc.data().author,
      }
    }
  })

  posts = JSON.parse(JSON.stringify(posts))

  return {
    props: {
      posts
     }
  }
}

export default function Home({ posts }) {

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.postsList}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
