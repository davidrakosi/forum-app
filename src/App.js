import styled from 'styled-components'
import { postDummyData } from './data/postData'
import Header from './components/Header'
import Post from './components/Post'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        {/* comment */}
        <MainContent>
          <ContentWrapper>
            {postDummyData.map((post, index) => (
              <Post
                key={index}
                title={post.title}
                description={post.description}
                upvotes={post.upvotes}
                postedBy={post.postedBy}
                userImage={post.userImage}
              />
            ))}
          </ContentWrapper>
        </MainContent>
      </Main>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Main = styled.div`
  width: 1270px;
  display: flex;
  border: 1px solid #000;
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh-70px);

  ::-webkit-scrollbar {
    display: none;
  }
`
