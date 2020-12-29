//postclass
import {REQUEST} from '@/assets/axios/REQUEST.js'
const API=new REQUEST


export function IndexNav(){
  return API.request_promise({
    url:'/postclass',
    method:'GET'
  })
}