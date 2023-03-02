import User from '../components/user'

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map(data => {
        return (
          <div key={data.id}>
            <User datas={data} />
          </div>
        )
      })}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  //   console.log(data)

  return {
    props: {
      users: data
    }
  }
}
