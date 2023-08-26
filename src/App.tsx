import './App.css'

function App() {
  return (
    <>
      <div className='text-3xl font-bold underline'>New FE project</div>
    </>
  )
}

export default App


// #region : welcome page loadable

// const WelomePageLoadable = (Component: React.FC) => (props: any) => {
//   return (
//     <Suspense fallback={<WelcomeLoadingPage />}>
//       <Component {...props} />
//     </Suspense>
//   )
// }

// const Welcome = WelomePageLoadable(
//   lazy(() => import("./routes/base_routes/switchable/Welcome"))
// )

// #endregion