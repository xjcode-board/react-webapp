import React from 'react'
import loadable from 'loadable-components'
import Pageing from "../components/Pageing";
import PageError from "../components/PageError";
const Loading = () =>  <Pageing/>
const ErrorDisplay = ({ error }) => <PageError errorMessage={error.message}/>

export const Home = loadable(() => import('../views/home'), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay
})
 