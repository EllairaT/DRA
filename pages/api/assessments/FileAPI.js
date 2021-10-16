const apikey = process.env.NEXT_PUBLIC_FS_API_KEY
const token = {}
const options = {
  storeTo: {
    location: 'azure',
    path: '/DRA_uploads/'
  },
  fromSources: ['local_file_system', 'video']
}

const uploadOpts = {}
const storeOpts = {
  location: 'azure',
  path: '/DRA_uploads/'
}

// initialise filestack client
const c = client.init(apikey, options)

//return metadata
function getMetaData(res) {
  c.metadata(res.filesUploaded[0].handle)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
}

//works- get metadata later
function uploadVideo(e) {
  c.upload(e.target.files[0], uploadOpts, storeOpts)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
