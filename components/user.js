function User({ datas }) {
  return (
    <>
      <p>{datas.id}</p>
      <p>{datas.name}</p>
      <p>{datas.email}</p>
      <hr />
    </>
  )
}

export default User
