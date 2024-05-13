
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
    
     <Header></Header>
      
      <main className='md:flex w-full mx-20'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    
    </>
  )
}

export default App
