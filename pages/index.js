import { useContext } from 'react';
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import { MediumContext } from '../context/MediumContext';


const styles = {
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
  container: `max-w-7xl flex-1`,
  main: `flex justify-center`,
  wrapper: `mx-auto`,
}

export default function Home() {

  const { users, posts } = useContext(MediumContext);

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
