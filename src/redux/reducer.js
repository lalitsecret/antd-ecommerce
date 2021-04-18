const initialState={
  products:data.products,
  tags:data.tags,
  cart:data.cart,
  orders:data.orders,
  users:data.users,
  filters:["id","old","new","rating","discount"],
  col:"",
  order:true,
  tagname:"",
  search:"",
  loggedin:false,
  user:{}
}

function reducer(state=initialState,action)
{
  switch(action.type)
  {
    default:
      return state
  } 
}


export default reducer