import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { UserCard, Jumbotron, Spinner, Layout } from '../components'

export const About = () => {
  const [state, setState] = useState({ loading: false })

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`
    setState({ loading: true })

    const fetchData = async () => {
      await axios
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            setState({ loading: false, data: res.data })
          }
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [])

  if (state.loading) {
    return <Spinner />
  }

  if (!state.loading) {
    return (
      <Layout>
        <Jumbotron />
        <div className='d-lg-flex justify-content-space-beween flex-wrap'>
          {renderTestimonials(state.data)}
        </div>
      </Layout>
    )
  }
}

const renderTestimonials = (users) =>
  users && users.map((user) => <UserCard user={user} key={user.id} />)
