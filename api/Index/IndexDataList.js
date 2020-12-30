//postclass
import {REQUEST} from '@/assets/axios/REQUEST.js'
const API=new REQUEST


export function IndexDataList(ID=1,PAGE=1){
  return API.request_promise({
    url:`/postclass/${ID}/post/${PAGE}`,
    method:'GET'
  })
}