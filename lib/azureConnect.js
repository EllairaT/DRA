import { Connection, Request } from 'tedious'

function connectToAzure() {
  //connection config
  const config = {
    authentication: {
      options: {
        userName: process.env.AZURE_USERNAME,
        password: process.env.AZURE_PASSWORD
      },
      type: 'default'
    },
    server: process.env.AZURE_SERVER,
    options: {
      database: process.env.AZURE_DB,
      encrypt: true
    }
  }

  const connection = new Connection(config)

  //connect, and check connection
  connection.connect()
  connection.on('connect', (err) => {
    if (err) {
      console.error(err.message)
    }
  })
}

export default connectToAzure
