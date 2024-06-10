import { File, Tree } from "./types";

export function sortFile(a: File | Tree, b: File | Tree){
  let sa = a.name.split(".")
  let sb = b.name.split(".")
  
  let ea = sa.pop()
  let eb = sb.pop()
  
  let aname = sa.join(".").toLowerCase()
  let bname = sb.join(".").toLowerCase()

  let order = aname.localeCompare(bname)

  if(ea?.startsWith("h")){
	order -= 0.01
  }
  if(eb?.startsWith("h")){
	order += 0.01
  }

  return order
}
