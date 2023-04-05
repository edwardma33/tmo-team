import React from 'react'
import questionList from '@/pages/api/questionList'


function Question({index}) {
  const fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, dolor quis tincidunt tincidunt, nisl augue feugiat est, non consectetur metus erat sit amet erat. Fusce vehicula est fermentum vel.'
  return (
    <main className=' text-center p-5 rounded-3xl shadow-2xl dark:shadow-md mb-10 mx-1 dark:shadow-magenta'>
      <h1 className=' text-magenta py-2 text-4xl'>{questionList[index].header}</h1>
      <p className=' my-2 md:text-lg' p>{questionList[index].body}</p>
      <p>{questionList[index].dateAnswered}</p>
    </main>
  )
}

export default Question