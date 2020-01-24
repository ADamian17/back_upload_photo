const res = [
  {
      status: 500,
      message: 'Something went wrong! Please try again'
    },
  { status: 201, 
    message: "success" 
    },
  {
    status: 404,
    message: "page not found"
  },
  {
    status: 400,
    message: "Something went wrong. Please try again stops here, My res "
  }
]

const customeRes = ( num ) => {
  let costumRes = {}
  const objRes = res.map( ( index ) => {
    if ( index.status === num ) {
      costumRes = index
    }
  } )
  return costumRes
}

customeRes(201)

module.exports = {
  costumRes
}