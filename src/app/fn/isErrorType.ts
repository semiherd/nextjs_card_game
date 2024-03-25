import { Error } from 'src/app/api/type'

function isError<T>(obj: Error|T): obj is Error {
  if((obj as Error).error && (obj as Error).error!==null){
    return true
  }
  return false
}
export { isError }